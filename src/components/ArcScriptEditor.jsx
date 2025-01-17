import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';
import Redo from '@ckeditor/ckeditor5-undo/src/redocommand';

const ArcScriptEditor = ({ initialData, onChange }) => {
    const editorRef = useRef(null);

    const editorConfig = {
        plugins: [Essentials, CodeBlock, FindAndReplace, Paragraph, Undo, Redo],
        toolbar: ['codeBlock', 'findAndReplace', '|', 'undo', 'redo'],
        codeBlock: {
            languages: [
                { language: 'plaintext', label: 'Plain Text' },
                { language: 'javascript', label: 'ArcScript' }, // Placeholder syntax
            ]
        },
        placeholder: '// Write ArcScript here...',
    };

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.editor.setData(initialData || '');
        }
    }, [initialData]);

    return (
        <div>
            <CKEditor
                editor={BalloonEditor}
                config={editorConfig}
                onReady={(editor) => (editorRef.current = { editor })}
                onChange={(event, editor) => onChange(editor.getData())}
            />
        </div>
    );
};

// Add PropTypes validation
ArcScriptEditor.propTypes = {
    initialData: PropTypes.string, // initialData should be a string
    onChange: PropTypes.func.isRequired, // onChange is required and should be a function
};

// Default props
ArcScriptEditor.defaultProps = {
    initialData: '', // Default to an empty string if initialData is not provided
};

export default ArcScriptEditor;

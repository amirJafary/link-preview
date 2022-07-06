import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyTexteditor = () => {
    const editorRef = useRef(null);
    const log = (e) => {
        // if (editorRef.current) {
        //     console.log(editorRef.current.getContent());
        // }
        console.log('value is => ',e)
    };
    return (
        <>
            <Editor
                apiKey='q0ecod9mh58n1gldvtht1685dne5bkthz5nieyzzb9x4b0hb'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=""
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={log}
            />
            {/* <button onClick={log}>Log editor content</button> */}
        </>
    );
};

export default TinyTexteditor;
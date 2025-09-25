import type {JSONContent} from "@tiptap/react";
import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


interface Props {
    content: JSONContent;
}


export const ProductDescription = ({content}: Props) => {

    const editor = useEditor({
        extensions: [StarterKit],
        content,
        editable: false,
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose-base max-w-none"
            },
        },
    });


    return <div>
        <h2 className="text-2xl font-bold text-center mb-8 underline">
            Descripcion
        </h2>
        <EditorContent editor={editor} />
    </div>;
};
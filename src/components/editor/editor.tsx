import "./editor.scss";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useCallback, useEffect, useState } from "react";
// import { MemoryItemService } from "@/service/memoryItemService";
// import { MemoryNodeService } from "@/service/memoryNodeService";
const Editor = () => {
  const [isEditing, setIsEditing] = useState(false);
  const isMarkActive = (mark: string) => {
    if (editor.isActive(mark)) return true;

    const storedMarks = editor.state.storedMarks;
    return storedMarks?.some((m) => m.type.name === mark) ?? false;
  };
  const [, forceUpdate] = useState<number>(0);
  const editor = useEditor({
    extensions: [StarterKit],
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: "" }],
        },
      ],
    },
    onSelectionUpdate: () => {
      forceUpdate((v) => v + 1);
    },

    onUpdate: () => {
      forceUpdate((v) => v + 1);
    },
  });

  useEffect(() => {
    editor?.setEditable(isEditing);
  }, [isEditing, editor]);
  const handleSave = useCallback(() => {
    if (!editor) return;

    const data = editor.getJSON();
    return;
    // console.log("Saved:", data);
  }, [editor]);
  if (!editor) return null;

  return (
    <div
      className={`editor-wrapper ${isEditing ? "editing" : "readonly"}`}
      onClick={() => !isEditing && setIsEditing(true)}
    >
      {isEditing && (
        <div className="editor-toolbar">
          {/* Text marks */}
          <button
            className={isMarkActive("bold") ? "active" : ""}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <b>B</b>
          </button>

          <button
            className={editor.isActive("italic") ? "active" : ""}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <i>I</i>
          </button>

          <button
            className={editor.isActive("strike") ? "active" : ""}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <s>S</s>
          </button>

          <button
            className={editor.isActive("code") ? "active" : ""}
            onClick={() => editor.chain().focus().toggleCode().run()}
          >
            <code>`Code`</code>
          </button>

          {/* Blocks */}
          <button
            className={editor.isActive("codeBlock") ? "active" : ""}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          >
            CodeBlock
          </button>

          <button
            className={editor.isActive("blockquote") ? "active" : ""}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >
            Quote
          </button>

          {/* Lists */}
          <button
            className={editor.isActive("bulletList") ? "active" : ""}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            •
          </button>

          <button
            className={editor.isActive("orderedList") ? "active" : ""}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            1.
          </button>

          {/* Rule */}
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            ―
          </button>

          {/* History */}
          <button
            disabled={!editor.can().undo()}
            onClick={() => editor.chain().focus().undo().run()}
          >
            Undo
          </button>

          <button
            disabled={!editor.can().redo()}
            onClick={() => editor.chain().focus().redo().run()}
          >
            Redo
          </button>

          {/* <button onClick={handleSave}>Save</button> */}
        </div>
      )}

      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
};

export default Editor;

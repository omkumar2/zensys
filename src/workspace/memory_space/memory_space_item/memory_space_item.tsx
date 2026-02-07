import { useActiveTab } from "@/hooks/useActiveTab";
import "./memory_space_item.scss";
import { MemoryItemService } from "@/service/memoryItemService";
import { Memory, useMemoryStore } from "@/store/useMemoryStore";
import { useTags } from "@/hooks/useTag";
import { useState } from "react";
import { listen } from "@tauri-apps/api/event";

type MemorySpaceItemProps = {
  memory: Memory;
};

const MemorySpaceItem = ({ memory }: MemorySpaceItemProps) => {
  // const [editable, setEditable] = useState(false);
  const { deleteMemoryItem } = MemoryItemService();
  const { setActiveTabView } = useActiveTab();
  const { tags, addTagToNode } = useTags();
  const [showTagPicker, setShowTagPicker] = useState<boolean>(false);
  const { setMemory } = useMemoryStore();
  const { activeNode } = memory;

  const nodeTagIds = new Set(activeNode.tags.map((t) => t.id));

  const availableTags = tags.filter((tag) => !nodeTagIds.has(tag.id));

  return (
    <article className="memory-node">
      <button
        className="memory-node-edit-btn"
        onClick={(e) => {
          e.stopPropagation();
          // e.preventDefault();
          {
            memory &&
              setMemory({
                memoryItem: memory.memoryItem,
                activeNode: memory.activeNode,
                nodes: memory.nodes,
              });
          }
          setActiveTabView("editor");
        }}
      >
        Edit
      </button>
      <button
        className="memory-node-delete-btn"
        onClick={async (e) => {
          e.stopPropagation();
          const ok = await deleteMemoryItem(activeNode.memory_id);
          if (!ok) {
            // show toast, log, scream, something
            return;
          }
          setActiveTabView("list");
        }}
      >
        Delete
      </button>
      <button
        className="memory-node-add_tag-btn"
        onClick={async (e) => {
          e.stopPropagation();
          setShowTagPicker(true);
          // const ok = await addTagToNode(activeNode.memory_id,activeNode.node_id,)
        }}
      >
        Add Tag
      </button>
      {showTagPicker && (
        <div className="tag-picker">
          <div className="tag-picker__header">
            <span>Tags</span>
          </div>

          <ul className="tag-picker__list">
            {availableTags.length === 0 && (
              <li className="tag-picker__empty">No tags found</li>
            )}

            {availableTags.map((t) => (
              <li
                key={t.id}
                className="tag-picker__item"
                onClick={() =>
                {

                  const ok =addTagToNode(activeNode.memory_id, activeNode.node_id, t)
                  if(!ok) {
                    //toast
                  }
                  setShowTagPicker(false)
                }
              }
              >
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <header className="memory-node__header">
        <h1 className="memory-node__title">{activeNode.title}</h1>

        <time className="memory-node__timestamp">
          {new Date(activeNode.created_at).toLocaleString()}
        </time>
      </header>
      <ul className="memory-node__tags">
        {activeNode.tags.length > 0 ? (
          activeNode.tags.map((t) => (
            <li className="tag" key={t.id}>
              {t.label}
            </li>
          ))
        ) : (
          <li className="no-tags">No Tags available</li>
        )}
      </ul>
      <section
        className="memory-node__content"
        // onClick={()=>{}}
      >
        {/* <Editor content={activeNode.content} editable={editable}></Editor> */}
        {activeNode.content_json}
      </section>
    </article>
  );
};

export default MemorySpaceItem;

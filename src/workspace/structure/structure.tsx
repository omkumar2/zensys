import "./structure.scss";
import { useState } from "react";
import { v7 } from "uuid";
import { priorityBand } from "./helper";
import { Tag } from "@/types/tag";
import {useTags} from "@/hooks/useTag";

const Structure = () => {
    const {tags, loading, error, reload, saveTag} = useTags();
    
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (!tagInput.trim()) return;

    const newTag: Tag = {
        id: v7(),
        label: tagInput.trim(),
        description: "",
        priority: 0.1
      }

    saveTag(newTag);
    setTagInput("");
  };

  const updatePriority = () => {
    
  };

  const removeTag = () => {
   
  };

  {
    loading && <p>Loading tags...</p>;
  }
  {
    error && (<><p className="error">Error loading tags.</p>
        <p>{String(error)}</p>
        </>
    );
  }
  return (
    <div className="structure">
      <h3>Structure</h3>
      <p className="hint">Define tags and their importance</p>

      <div className="tag-input">
        <input
          value={tagInput}
          onChange={e => setTagInput(e.target.value)}
          placeholder="Create a tag (e.g. Health, Work)"
          onKeyDown={e => e.key === "Enter" && addTag()}
        />
        <button onClick={addTag}>Add</button>
      </div>

      <div className="tag-list">
        {tags.map(tag => (
          <div
            key={tag.id}
            className="tag-item"
            data-priority={priorityBand(tag.priority)}
          >
            <span className="label">{tag.label}</span>

            <input
              type="range"
              min={-1}
              max={1}
              step={0.01}
              value={tag.priority}
             
            />

            <span className="priority">{tag.priority}</span>

            <button
              className="delete"
            //   onClick={() => removeTag(tag.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Structure;

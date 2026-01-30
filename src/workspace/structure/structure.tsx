import "./structure.scss";
import { useState } from "react";
import { v7 } from "uuid";
import { priorityBand } from "./helper";
type Tag = {
  id: string;
  label: string;
  priority: number;
};

const Structure = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (!tagInput.trim()) return;

    setTags(prev => [
      ...prev,
      {
        id: v7(),
        label: tagInput.trim(),
        priority: 0.1
      }
    ]);
    setTagInput("");
  };

  const updatePriority = (id: string, priority: number) => {
    setTags(prev =>
      prev.map(tag =>
        tag.id === id ? { ...tag, priority } : tag
      )
    );
  };

  const removeTag = (id: string) => {
    setTags(prev => prev.filter(tag => tag.id !== id));
  };

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
              onChange={e =>
                updatePriority(tag.id, Number(e.target.value))
              }
            />

            <span className="priority">{tag.priority}</span>

            <button
              className="delete"
              onClick={() => removeTag(tag.id)}
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

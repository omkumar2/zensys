import "./create.scss";
import { useState } from "react";
import Editor from "@/components/editor/editor";
import type { MemoryType } from "@/memory/schema";

const Create = () => {
  const [title, setTitle] = useState("");
  const [memoryType, setMemoryType] = useState<MemoryType>("diary");

  return (
    <div className="create">
      <div className="create-field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="create-field">
        <label htmlFor="type">Memory type</label>
        <select
          id="type"
          value={memoryType}
          onChange={(e) => setMemoryType(e.target.value as MemoryType)}
        >
          <option value="diary">Diary</option>
          <option value="fact">Fact</option>
          <option value="event">Event</option>
          <option value="schedule">Schedule</option>
        </select>
      </div>

      <div className="create-editor">
        <label>Content</label>
        <Editor />
      </div>
      <button id="create-save">Save</button>
    </div>
  );
};

export default Create;

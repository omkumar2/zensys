const MemorySettings = () => {
  return (
    <div className="settings__section">
      <h3>Memory</h3>

      <label className="setting">
        <span>Default memory view</span>
        <select>
          <option>Timeline</option>
          <option>Tree</option>
          <option>List</option>
        </select>
      </label>

      <label className="setting">
        <span>Auto-create node on entry</span>
        <input type="checkbox" />
      </label>
    </div>
  );
};
export default MemorySettings;
const GeneralSettings = () => {
  return (
    <div className="settings__section">
      <h3>General</h3>

      <label className="setting">
        <span>Start on last opened memory</span>
        <input type="checkbox" />
      </label>

      <label className="setting">
        <span>Enable animations</span>
        <input type="checkbox" defaultChecked />
      </label>
    </div>
  );
};
export default GeneralSettings;
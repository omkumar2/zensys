const IntelligenceSettings = () => {
  return (
    <div className="settings__section">
      <h3>Intelligence</h3>
      <p className="hint">
        Experimental. Your data stays local unless you say otherwise.
      </p>

      <label className="setting">
        <span>Enable sentiment analysis</span>
        <input type="checkbox" />
      </label>

      <label className="setting">
        <span>Allow memory weighting</span>
        <input type="checkbox" />
      </label>
    </div>
  );
};
export default IntelligenceSettings;
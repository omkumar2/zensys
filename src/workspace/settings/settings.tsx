import GeneralSettings from "./generalSettings/generalSettings";
import IntelligenceSettings from "./intelligenceSettings/intelligentSettings";
import MemorySettings from "./memorySettings/memorySettings";
import "./settings.scss";
import { useState } from "react";

type SettingsSection =
  | "general"
  | "memory"
  | "privacy"
  | "intelligence"
  | "advanced";

const Settings = () => {
  const [active, setActive] = useState<SettingsSection>("general");

  return (
    <div className="settings">
      <aside className="settings__sidebar">
        <h2 className="settings__title">Settings</h2>

        <nav>
          <button onClick={() => setActive("general")} className={active === "general" ? "active" : ""}>
            General
          </button>
          <button onClick={() => setActive("memory")} className={active === "memory" ? "active" : ""}>
            Memory
          </button>
          <button onClick={() => setActive("privacy")} className={active === "privacy" ? "active" : ""}>
            Privacy & Storage
          </button>
          <button onClick={() => setActive("intelligence")} className={active === "intelligence" ? "active" : ""}>
            Intelligence
          </button>
          <button onClick={() => setActive("advanced")} className={active === "advanced" ? "active" : ""}>
            Advanced
          </button>
        </nav>
      </aside>

      <section className="settings__panel">
        {active === "general" && <GeneralSettings />}
        {active === "memory" && <MemorySettings />}
        {/* {active === "privacy" && <PrivacySettings />} */}
        {active === "intelligence" && <IntelligenceSettings />}
        {/* {active === "advanced" && <AdvancedSettings />} */}
      </section>
    </div>
  );
};

export default Settings;

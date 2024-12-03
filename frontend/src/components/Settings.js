import React, { useState } from "react";
import { updateSettings } from "../api";

function Settings() {
  const [settings, setSettings] = useState({
    tradeQuantity: 0.05,
    rsiPeriod: 14,
    rsiOverbought: 70,
    rsiOversold: 30,
  });

  const handleUpdate = async () => {
    await updateSettings(settings);
    alert("Settings updated successfully!");
  };

  return (
    <div className="settings">
      <h2>Bot Settings</h2>
      <label>
        Trade Quantity:
        <input
          type="number"
          value={settings.tradeQuantity}
          onChange={(e) =>
            setSettings({ ...settings, tradeQuantity: e.target.value })
          }
        />
      </label>
      <label>
        RSI Period:
        <input
          type="number"
          value={settings.rsiPeriod}
          onChange={(e) =>
            setSettings({ ...settings, rsiPeriod: e.target.value })
          }
        />
      </label>
      <label>
        RSI Overbought:
        <input
          type="number"
          value={settings.rsiOverbought}
          onChange={(e) =>
            setSettings({ ...settings, rsiOverbought: e.target.value })
          }
        />
      </label>
      <label>
        RSI Oversold:
        <input
          type="number"
          value={settings.rsiOversold}
          onChange={(e) =>
            setSettings({ ...settings, rsiOversold: e.target.value })
          }
        />
      </label>
      <button onClick={handleUpdate}>Update Settings</button>
    </div>
  );
}

export default Settings;

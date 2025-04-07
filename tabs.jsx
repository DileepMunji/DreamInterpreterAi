import React, { useState } from "react";

const SimpleTabs = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab("Tab 1")}>Tab 1</button>
        <button onClick={() => setActiveTab("Tab 2")}>Tab 2</button>
        <button onClick={() => setActiveTab("Tab 3")}>Tab 3</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {activeTab === "Tab 1" && <p>This is content for Tab 1</p>}
        {activeTab === "Tab 2" && <p>This is content for Tab 2</p>}
        {activeTab === "Tab 3" && <p>This is content for Tab 3</p>}
      </div>
    </div>
  );
};

export default SimpleTabs;

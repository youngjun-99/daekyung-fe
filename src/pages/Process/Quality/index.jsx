import React, { useState } from "react";
import {
  QualityContent,
  TitleSection,
  Title,
  TabList,
  Tab,
  TabContent,
} from "./styles";
import Exact from "./Exact";
import Mes from "./Mes";

const Quality = () => {
  const [activeTab, setActiveTab] = useState("exact");

  const tabs = [
    { id: "exact", label: "Exact 2 색차계", component: Exact },
    { id: "mes", label: "MES", component: Mes },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || Exact;

  return (
    <QualityContent>
      <TitleSection>
        <Title>품질 관리</Title>
      </TitleSection>

      <TabList>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            $active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabContent>
        <ActiveComponent />
      </TabContent>
    </QualityContent>
  );
};

export default Quality;

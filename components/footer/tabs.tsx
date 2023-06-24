"use client";
import { useState } from 'react';
import Washing from './tabs/washing';
import Bleaching from './tabs/bleaching';
import Drying from './tabs/drying';
import Ironing from './tabs/ironing';
import Drycleaning from './tabs/drycleaning';

export default function FooterTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      name: 'Washing',
      id: 1,
      content: <Washing />,
    },
    {
      name: 'Bleaching',
      id: 2,
      content: <Bleaching />,
    },
    {
      name: 'Drying',
      id: 3,
      content: <Drying />,
    },
    {
      name: 'Ironing',
      id: 4,
      content: <Ironing />,
    },
    {
      name: 'Drycleaning',
      id: 5,
      content: <Drycleaning />,
    },
  ];

  return (
    <main className="container mx-auto py-10 overflow-x-scroll overflow-y-hidden md:overflow-hidden">
      <ul className="flex md:flex-row gap-2 justify-between relative transition-all">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`py-3 px-8 border rounded cursor-pointer hover:bg-black hover:text-white transition-all w-full text-center bg-gray-300 ${
              activeTab === tab.id ? '!bg-black text-white relative' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <p className={`${activeTab === tab.id ? 'footer_tab' : ''}`}>
              {tab.name}
            </p>
          </li>
        ))}
      </ul>
        <div className="mt-5 text-sm">{tabs[activeTab - 1].content}</div>
    </main>
  );
}

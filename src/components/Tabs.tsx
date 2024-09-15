import { ReactNode, useState } from "react";

interface TabsProps {
  tabList: string[];
  children: ReactNode[];
  tabContentStyle?: string;
}

export default function Tabs({
  tabList,
  children,
  tabContentStyle,
}: TabsProps) {
  const [tabIndex, setTabIndex] = useState(0);

  const onTabClick = (val: number) => {
    setTabIndex(val);
  };

  return (
    <>
      <div className="">
        <div className="sticky top-0 z-50 flex bg-white py-4">
          {tabList.map((tab, index) => {
            return (
              <button
                key={index}
                onClick={() => onTabClick(index)}
                className={`w-full border-b-2 px-4 pb-2 font-bold ${index === tabIndex ? "border-primary text-primary" : ""}`}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className={`${tabContentStyle} px-6 py-4`}>
          {children[tabIndex]}
        </div>
      </div>
    </>
  );
}

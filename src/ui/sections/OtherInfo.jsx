import { useState, useRef, useEffect } from "react";

const tabs = [
  {
    title: "Tab 1",
    content: "This is the content for Tab 1.",
  },
  {
    title: "Tab 2",
    content: "This is the content for Tab 2.",
  },
  {
    title: "Tab 3",
    content: "This is the content for Tab 3.",
  },
];

export default function OtherInfo() {
  const [currentTab, setCurrnteTab] = useState(0);
  const tabRefs = useRef([]);

  // Ensure tabRefs has the right length
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, []);

  function handeKeydow(e, index) {
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % tabs.length;
      tabRefs.current[nextIndex].focus();
    } else if (e.key === "ArrowLeft") {
      const nextIndex = (index - 1 + tabs.length) % tabs.length;
      tabRefs.current[nextIndex].focus();
    }
  }

  return (
    <section>
      <div className="py-24 max-w-[800px] w-11/12 mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-5xl font-bold">Other Information</h2>
        </header>

        {/* Tab */}
        <div className="relative flex" role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              ref={(e) => (tabRefs.current[index] = e)}
              role="tab"
              onClick={() => setCurrnteTab(index)}
              onKeyDown={(e) => handeKeydow(e, index)}
              className={`${currentTab === index ? "border-blue-400 bg-transparent" : "border-zinc-300"} relative z-20 px-4 py-4 bg-zinc-300 font-bold text-lg border-b-4 transition-all duration-300`}
              aria-selected={index === currentTab}
              tabIndex={index === currentTab ? "-1" : "0"}
            >
              {tab.title}
            </button>
          ))}
          <div className="absolute z-10 bottom-0 w-full h-[4px] bg-zinc-300"></div>
        </div>

        {/* Tab Panels */}
        <div className="mt-2 px-2 py-2 border-2 border-solid border-black h-[200px]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              role="tabpanel"
              aria-hidden={currentTab !== index}
              aria-labelledby={`tab-${index}`}
              className={`${currentTab !== index ? "hidden" : ""}`}
            >
              <p>{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";

const CustomApp = () => {
    const tabs: Tab[] = [
        { id: 1, title: "Tab 1" },
        { id: 2, title: "Tab 2" },
        { id: 3, title: "Tab 3" },
      ];
    
      const images: Image[] = [
        { id: 1, url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", tabId: 1 },
        { id: 2, url: "https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg", tabId: 1 },
        { id: 3, url: "https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg", tabId: 2 },
        { id: 4, url: "https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg", tabId: 3 },
        { id: 5, url: "https://t4.ftcdn.net/jpg/05/55/71/83/360_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg", tabId: 3 },
      ];
  return (
    <>
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Tab Gallery</h1>
            <TabGallery tabs={tabs} images={images} />
        </div>
    </>
  )
}

export default CustomApp


interface Tab {
    id: number;
    title: string;
  }
  
  interface Image {
    id: number;
    url: string;
    tabId: number;
  }

  interface TabGalleryProps {
    tabs: Tab[];
    images: Image[];
  }

  const TabGallery: React.FC<TabGalleryProps> = ({ tabs, images }) => {
    const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  
    const handleTabClick = (tabId: number) => {
      setActiveTab(tabId);
    };
  
    return (
      <div>
        <div className="flex">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer px-4 py-2 ${
                activeTab === tab.id ? "bg-gray-600 text-white" : "bg-gray-300"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {images
            .filter((image) => image.tabId === activeTab)
            .map((image) => (
              <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
            ))}
        </div>
      </div>
    );
  };
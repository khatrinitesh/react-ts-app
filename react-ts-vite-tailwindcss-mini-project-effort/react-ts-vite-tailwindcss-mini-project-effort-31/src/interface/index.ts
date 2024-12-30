export interface BannerProps{
    title:string;
    description:string;
    bannerStyle:React.CSSProperties;
}

export interface IconBarProps{
    activeTab:string;
    setActiveTab:(tab:string) => void;
}

export interface AccordionProps{
    sections: { id: string; title: string; content: string }[]; // Define section structure
}

export interface AccordionState {
    expandedSection: string | null; // Keeps track of the expanded section
    toggleSection: (sectionId: string) => void; // Action to toggle the section
  }


  export interface TabState{
    activeTab:string;
    setActiveTab:(tabId:string) => void;
  }

  export interface TabProps {
    id: string;
    label: string;
    children: React.ReactNode;
  }
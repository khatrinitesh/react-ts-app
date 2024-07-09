import { ArrowConstants, AspectRatioProps } from "../interface/interface";
import { AutocompleteOption } from './../interface/interface';

export const autocompleteOptions: AutocompleteOption[] = [
    { id: 1, label: 'Apple', value: 'apple' },
    { id: 2, label: 'Banana', value: 'banana' },
    { id: 3, label: 'Cherry', value: 'cherry' },
    { id: 4, label: 'Date', value: 'date' },
]

export const aspectRatioConstants:AspectRatioProps[] = [
    { name: '16:9', ratio: '16:9' },
    { name: '4:3', ratio: '4:3' },
    { name: '1:1', ratio: '1:1' },
    // Add more aspect ratios as needed
]

export const arrowConstants: ArrowConstants = {
    up: {
        name: 'Up Arrow',
        path: 'M12 19V5M5 12l7-7 7 7',
    },
    down: {
        name: 'Down Arrow',
        path: 'M12 5v14M5 12l7 7 7-7',
    },
    left: {
        name: 'Left Arrow',
        path: 'M19 12H5M12 5l-7 7 7 7',
    },
    right: {
        name: 'Right Arrow',
        path: 'M5 12h14M12 5l7 7-7 7',
    },
    // add more arrow definitions as needed;
}
// Constants for search input styles
export const searchStyles = {
    base: 'py-2 px-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out',
};

// Constants for button styles and animations
export const buttonStyles2 = {
    base: 'py-3 px-6 rounded-md text-white font-semibold transition duration-300 ease-in-out',
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    disabled: 'opacity-50 cursor-not-allowed',
};

export const buttonAnimations = {
    hover: 'transform hover:scale-110', // CSS animation class on hover
};

// Constants for icon styles and animations
export const iconStyles = {
    base: 'w-12 h-12 p-2 rounded-full cursor-pointer',
    selected: 'bg-blue-500 text-white',
    notSelected: 'bg-gray-200',
}

export const iconAnimations = {
    selected:'animate-bounce'//    CSS animation class when icon is selected
}

// Constants for alert colors
export const alertColors = {
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
};

// Constants for button styles
export const buttonStyles = {
    base: 'py-2 px-4 rounded-md text-white',
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    disabled: 'opacity-50 cursor-not-allowed',
};

//******************** Accordion
// Constants for inline styles
export const accordionItemStyles = {
    container: {
        border: '1px solid #ddd',
        marginBottom: '10px',
    },
    header: {
        background: '#f1f1f1',
        padding: '10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    content: {
        padding: '10px',
        display: 'none', // Hidden by default
    },
    activeContent: {
        display: 'block', // Displayed when active
    },
};
export const AccordionData= [
    { title: 'Section 1', content: 'Content of section 1' },
    { title: 'Section 2', content: 'Content of section 2' },
    { title: 'Section 3', content: 'Content of section 3' },
]
export const ListItemsData = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
];

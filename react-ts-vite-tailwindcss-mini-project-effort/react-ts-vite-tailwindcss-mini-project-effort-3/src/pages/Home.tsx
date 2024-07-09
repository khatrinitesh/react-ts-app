import React, { useState } from 'react'
// COMPONENTS
// import AccordionComp from '../components/accordion';
import Banner from '../components/banner';
// import ActiveClassComp from '../components/activeClass';
// import AlertButtonsComp from './../components/AlertButtons';
// import AlertsComp from '../components/Alerts';
// import AnimateIconsComp from '../components/animateIcons';
// import AnimatedButtonsComp from '../components/AnimatedButtons';
// import AnimatedSearchComp from '../components/animatedSearch';
// import AnimationComp from '../components/Animation';
// import ArrowsComp from '../components/Arrows';
// import ApiFetchDataComp from '../components/apifetchdata';
// import AspectRatioComp from '../components/AspectRatio';
import AutocompleteComp from '../components/Autocomplete';

// INTERFACE
// import { AccordionItem } from '../interface/interface';
// import { ButtonProps,AlertProps } from '../interface/interface';

// CONSTANTS
// import { AccordionData } from '../constants/constants';
// import { ListItemsData } from '../constants/constants';

// WALLPAPER
import Icon1 from "../assets/img/icon1.png";
import Icon2 from "../assets/img/icon2.png";




const Home:React.FC = () => {
  // const [selectedIcon, setSelectedIcon] = useState<string>('icon1');

  //   const handleIconClick = (iconName: string) => {
  //       setSelectedIcon(iconName);
  //   };
//   const handleButtonClick = () => {
//     alert('Button clicked!');
// };

const handleSearch = (query: string) => {
  alert(`Searching for: ${query}`);
};


  return (
    <div className='content'>
        <Banner bannerStyle="bg-cyan-500 text-white" title="Home page" description='Qui enim tempor sint cillum cillum.'/>
        {/* <AnimateIconsComp onClick={() => handleIconClick('icon1')} isSelected={selectedIcon === 'icon1'} icon={selectedIcon == 'icon1' ? Icon1 : Icon2}/>
        <AnimateIconsComp onClick={() => handleIconClick('icon2')} isSelected={selectedIcon === 'icon2'} icon={selectedIcon == 'icon2' ? Icon1 : Icon2}/> */}
        {/* <AnimatedButtonsComp label="Primary Button" onClick={handleButtonClick} />
        <AnimatedButtonsComp label="Secondary Button" onClick={handleButtonClick} /> */}

        <AutocompleteComp/>
    </div>
  )
}

export default Home
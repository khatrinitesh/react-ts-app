import React, { useEffect } from 'react';
import Banner from '../layout/Banner';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import Alert from './../components/Alert';
import AnimateIcons from '../components/AnimateIcons';
import Arrows from '../components/Arrows';
import Autocomplete from '../components/Autocomplete';
import { autocompleteData, avatarImages } from '../constants/constants';
import AvatarImg from '../components/AvatarImg';
import { useAvatarImgStore, useBlurImgStore } from '../store/store';
import { motion } from 'framer-motion';
import BackgroundBlurImg from '../components/BackgroundBlurImg';
import BulletList from '../components/BulletList';
import BgColor from '../components/BgColor';
import ChangeBgScroll from '../components/ChangeBgScroll';
import CharacterCounter from '../components/CharacterCounter';
import CheckCheckbox from '../components/CheckCheckbox';
import CheckoutForm from '../components/CheckoutForm';
import CircleMenu from './CircleMenu';
import CircleDots from './CircleDots';
import ClayMorphism from '../components/ClayMorphism';
import ClearIputField from '../components/ClearIputField';
import ClickDropdowns from '../components/ClickDropdowns';
import ColorPicker from '../components/ColorPicker';
import CopyTxtClipboard from '../components/CopyTxtClipboard';
import CountDown from '../components/CountDown';

const About = () => {
  const { avatarUrl ,setAvatarUrl} = useAvatarImgStore();  
   // Set the default avatar on component mount if no avatar is selected
   const {blurinensity,setBlurIntensity} = useBlurImgStore();
   useEffect(() => {
    if (!avatarUrl) {
      setAvatarUrl(avatarImages[1]);  // Set first avatar as default if no avatar is selected
    }
  }, [avatarUrl, setAvatarUrl]);


  return (
    <div className='content'>
      <Banner title='about' description='Voluptate tempor sit et deserunt fugiat in tempor proident.'/>'
      <CountDown/>
      <hr/>
      <CopyTxtClipboard/>
      <hr/>
      <ColorPicker/>
      <hr/>
      <ClickDropdowns/>
      <hr/>
      <ClearIputField/>
      <hr/>
      <ClayMorphism/>
      <hr/>
      <CircleDots/>
      <hr/>
      <CircleMenu/>
      <hr/>
      <CheckoutForm/>
      <hr/>
      <CheckCheckbox/>
      <hr/>
      <CharacterCounter/>
      <hr/>
      <ChangeBgScroll/>
      <hr/>
      <div style={{ minHeight: '100vh' }}>
      <BgColor/>
      </div>
      <hr/>
      <BulletList/>
      <hr/>
      <BackgroundBlurImg imgUrl='https://png.pngtree.com/thumb_back/fh260/background/20230627/pngtree-round-product-and-text-placeholder-on-abstract-orange-backdrop-3d-graphic-image_3685022.jpg'/>
      {/* Controls to adjust the blur intensity */}
      <div className="relative top-0 left-0 p-4 z-10">
        <h2 className="text-white">Adjust Background Blur</h2>
        <input
          type="range"
          min="0"
          max="20"
          value={blurinensity}
          onChange={(e) => setBlurIntensity(Number(e.target.value))}
          className="slider"
        />
        <p className="text-white">{`Blur Intensity: ${blurinensity}`}</p>
        </div>
      <hr/>
      <h1>Select Your Avatar</h1>
      <div className="flex gap-4">
        {avatarImages.map((url, index) => (
          <AvatarImg key={index} url={url} />
        ))}
      </div>
      {avatarUrl && (
        <div className="mt-4">
          <h2>Selected Avatar:</h2>
          <motion.img
            src={avatarUrl}
            alt="Selected Avatar"
            className="w-32 h-32 rounded-full mx-auto object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
      <hr/>
      <Autocomplete data={autocompleteData}/>
      <hr/>
      <Arrows/>
      <hr/>
      <AnimateIcons/>
      <hr/>
      <Button onClick={() => alert('clicked')} label="CLick me"/>
        <br />
      <Accordion title="click" content='Anim magna do mollit culpa irure cillum amet anim et id proident ullamco.'/>
      <Alert/>
    </div>
  );
}

export default About;

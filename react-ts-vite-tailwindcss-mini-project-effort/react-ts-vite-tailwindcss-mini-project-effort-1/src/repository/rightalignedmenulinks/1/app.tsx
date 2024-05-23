import React from 'react'

const CustomApp = () => {
    const menuLinks = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
      ];
  return (
    <>
      <h1>My App</h1>
      <RightAlignMenu links={menuLinks} />
    </>
  )
}

export default CustomApp

interface MenuProps{
    links: { title: string, url: string }[];
}

const RightAlignMenu:React.FC<MenuProps> = ({links}) => {
    return(
        <>
         <div style={{ textAlign: 'right' }}>
        {links.map((link, index) => (
            <a key={index} href={link.url} style={{ marginRight: '10px' }}>
            {link.title}
            </a>
        ))}
        </div>
        </>
    )
} 
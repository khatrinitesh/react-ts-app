import React from 'react'

const CustomApp:React.FC = () => {
  return (
    <div>
      <Footer/>
    </div>
  )
}

export default CustomApp

const listmap:ListProps[] = [
    {id:1,url:'https://www.w3schools.com/howto/howto_css_social_media_buttons.asp',text:'social media'},
    {id:2,url:'https://www.w3schools.com/howto/howto_css_alert_buttons.asp',text:'alert buttons'},
    {id:3,url:'https://www.w3schools.com/howto/howto_css_button_split.asp',text:'split'},
    {id:4,url:'https://www.w3schools.com/howto/howto_js_read_more.asp',text:'read more'},
]

const Footer: React.FC = () => {
    return (
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>This is the footer.</p>
        <nav>
          <ul>
            <ListOption items={listmap}/>
          </ul>
        </nav>
      </footer>
    );
}

interface ListProps{
    id:number;
    url:string;
    text:string;
}

const ListOption:React.FC<{items:ListProps[]}> = ({items}) => {
    return(
        <>
         {items.map((val) => {
            return(
                <li key={val.id}>
                    <a href={val.url} target='_blank'>
                        {val.text}
                    </a>
                </li>
            )
         })}
        </>
    )
}

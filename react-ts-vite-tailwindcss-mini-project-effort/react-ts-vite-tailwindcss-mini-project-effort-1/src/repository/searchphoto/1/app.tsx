import React,{useState} from 'react'

const CustomApp = () => {
    const items = [
        {size:'200px',id:1,title:'happy',url:'https://i.pinimg.com/736x/fe/d2/a3/fed2a302fe9f8ce3ee2b77849fb3bb39.jpg'},
        {size:'200px',id:2,title:'smile',url:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNTg2YmF0Y2gyLWVtb2ppLTAwNi5wbmc.png'},
        {size:'200px',id:3,title:'sad',url:'https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1571606093'},
        {size:'200px',id:4,title:'mood',url:'https://i.dailymail.co.uk/1s/2023/04/08/01/69612221-0-New_research_shows_men_are_more_likely_to_understand_an_emoji_th-m-54_1680913960125.jpg'},
    ];

  return (
    <>
        <SearchPhoto items={items}/>
    </>
  )
}

export default CustomApp

interface Photo {
    id:number;
    url:string;
    title:string;
    size:string;
}

interface PhotoProps{
    items:Photo[];
}

const SearchPhoto:React.FC<PhotoProps> = ({items}) => {
    // state management
    const [searchTerm,setSearchTerm] = useState<string>('');

    // filtered photos
    const filteredPhotos = items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // handle event input element
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }
    return(
        <>
         <input type="text" value={searchTerm} onChange={handleChange} />
         {filteredPhotos.map((photo) => (
            <li key={photo.id}>
                <img src={photo.url} alt={photo.title} width={photo.size} height={photo.size} />
                {photo.title}
            </li>
         ))}
        </>
    )
}


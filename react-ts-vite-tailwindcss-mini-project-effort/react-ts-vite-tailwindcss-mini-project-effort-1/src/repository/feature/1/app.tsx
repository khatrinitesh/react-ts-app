import React from 'react'

const CustomApp = () => {

    const option:FeatureProps[] =[
        {id:11,title:'head1',desc:'lorem ipsum',imgUrl:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'},
        {id:12,title:'head2',desc:'lorem ipsum',imgUrl:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'},
        {id:13,title:'head3',desc:'lorem ipsum',imgUrl:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'},
    ]
  return (
    <>
        <Feature item={option}/>
    </>
  )
}

export default CustomApp

interface FeatureProps{
    id:number;
    title:string;
    desc:string;
    imgUrl:string;
}

const Feature:React.FC<{item:FeatureProps[]}>  =({item}) => {
        return(
            <>
             {item.map((val) => {
                const {id,title,desc,imgUrl} = val;
                return(
                    <div key={id}>
                        <img src={imgUrl} alt={title}/>
                        <div className="caption">
                            <h3>{title} - {id}</h3>
                            <p>{desc}</p>
                        </div>
                    </div>
                )
             })}
            </>
        )
}
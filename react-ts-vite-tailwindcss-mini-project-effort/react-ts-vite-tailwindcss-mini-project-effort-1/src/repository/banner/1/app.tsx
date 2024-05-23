import React from 'react'

const CustomApp = () => {

    const options = [
        {text:'happy1',backgroundColor:'orange'},
        {text:'positive',backgroundColor:'blue'},
        {text:'mindset',backgroundColor:'pink'},
    ]
  return (
    <>
    {options.map((val,index) => {
        return(
            <Banner text={val.text} backgroundColor={val.backgroundColor}/>
        )
    })}
    </>
  )
}

export default CustomApp

interface BannerProps{
    text:string;
    backgroundColor:string;
}

const Banner:React.FC<BannerProps> = ({text,backgroundColor}) => {
    return(
        <>
            <div style={{backgroundColor,padding:'50px 30px',color:'white',textAlign:'center'}}>
                <h1 className='uppercase font-bold'>{text}</h1>
            </div>
        </>
    )
}
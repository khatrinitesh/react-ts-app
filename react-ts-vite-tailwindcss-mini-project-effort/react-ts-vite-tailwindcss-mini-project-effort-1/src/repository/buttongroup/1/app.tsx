import React from 'react'

const CustomApp = () => {

    const buttons:string[] = ['Ice cream 1', 'Ice cream 2', 'Ice cream 3']

    const handleBtn = (buttonText:sring) => {
        console.log(`Button clicked: ${buttonText}`)
    }
  return (
    <div>
        <BtnGrp buttons={buttons} onClick={handleBtn}/>
    </div>
  )
}

export default CustomApp




interface BtnGrpProps {
    buttons:string;
    onClick:(buttonText:string) => void;
}

const BtnGrp:React.FC<BtnGrpProps> = ({buttons,onClick}) => {

    return(
        <>
         {buttons.map((buttonText,index) => {
            return(
                <button key={index} onClick={() => onClick(buttonText)}>
                    {buttonText}
                </button>
            )
         })}
        </>
    )
}
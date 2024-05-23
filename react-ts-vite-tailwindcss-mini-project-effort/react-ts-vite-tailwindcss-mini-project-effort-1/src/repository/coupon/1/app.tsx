import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Coupon/>
    </>
  )
}

export default CustomApp

const Coupon:React.FC = () => {
    const [couponCode] = useState<string>('Coupon');
    const [copied,setCopied] = useState<boolean>(false);

    const CopytoClipboard = () => {
        navigator.clipboard.writeText(couponCode).then(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false);
            },3000)
        },(err) => {
            console.error('failed to copy text',err);
            
        });
    };
    return(
        <>
        <h1>Coupon Code: {couponCode}</h1>
        <button onClick={CopytoClipboard}>{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
        </>
    )
}
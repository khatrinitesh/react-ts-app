import React, { useState, useEffect } from "react";
// import "./style.css";
import QRCode from 'qrcode.react';

const CustomApp = () => {
    const qrCodeValue = 'https://example.com';
  return(
    <>
        <QRCodeComponent value={qrCodeValue} size={256} />
    </>
  )
};

export default CustomApp;

interface QRCodeProps{
    value:string; // the value to encode in the QR code
    size?:number; // optionals size of the QR code (default:128)
}

const QRCodeComponent: React.FC = ({value,size=128}) => {

  return <QRCode value={value} size={size}/>
};

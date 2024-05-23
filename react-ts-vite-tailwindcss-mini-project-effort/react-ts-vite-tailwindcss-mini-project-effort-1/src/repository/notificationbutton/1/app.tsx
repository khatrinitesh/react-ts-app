import React from 'react'

const CustomApp = () => {
  return (
    <>
        <NotificationBtn/>
    </>
  )
}

export default CustomApp

interface Props{
    text:string;
}

const NotificationBtn:React.FC<Props> = ({text}) => {

    const handleClick = () => {
        // Check if the browser supports notifications
        if ('Notification' in window) {
          // Request permission for notifications
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              // Create a notification
              new Notification('Notification', {
                body: 'You clicked the button!',
              });
            }
          });
        } else {
          alert('Notifications not supported in this browser');
        }
    }
    return(
        <>
         <button onClick={handleClick}>{text}</button>
        </>
    )
}
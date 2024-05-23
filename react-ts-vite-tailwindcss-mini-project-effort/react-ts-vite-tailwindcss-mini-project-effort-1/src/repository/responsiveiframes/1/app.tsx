import React from 'react'

const CustomApp = () => {
  return (
    <>
       <h1>Responsive Iframe Example</h1>
       <ResponsiveIframe src="https://www.youtube.com/embed/e2HJJ5t74Xk?si=RwIIxM11c4oRb8EN" title="Eiusmod sunt reprehenderit nisi voluptate laborum deserunt aliquip incididunt laborum nulla. Nulla nisi elit quis proident do ex officia. Fugiat consectetur voluptate laboris proident Lorem aliquip eiusmod velit reprehenderit sint ullamco labore non. Eu Lorem sit quis excepteur proident enim ut nostrud proident Lorem id. Minim velit irure in velit sit sint amet id elit. Dolor quis aliqua enim commodo anim adipisicing ex laboris ipsum consequat incididunt."/>
    </>
  )
}

export default CustomApp

interface ResponsiveIframeProps{
    src:string; // URL of the iframe content
    title:string; // Title for accessibility
}

const ResponsiveIframe: React.FC<ResponsiveIframeProps> = ({ src, title }) => {
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          title={title}
          src={src}
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '0',
          }}
        />
      </div>
    );
  };



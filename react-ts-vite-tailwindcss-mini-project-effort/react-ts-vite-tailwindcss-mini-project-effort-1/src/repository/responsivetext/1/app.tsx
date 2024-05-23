import React from 'react'

const CustomApp = () => {
  return (
    <>
      <ResponsiveText text="Incididunt laboris et laborum occaecat aute commodo. Ad enim ut qui ad dolore sunt eiusmod tempor esse in eu id esse laborum. Et ex ipsum laboris dolor occaecat officia. Laboris Lorem aute occaecat cillum commodo duis excepteur ut mollit."/>
    </>
  )
}

export default CustomApp

interface ResponsiveTextProps {
    text: string; // Text content
  }

  const ResponsiveText: React.FC<ResponsiveTextProps> = ({ text }) => {
    return (
      <div className="text-sm md:text-lg lg:text-xl xl:text-2xl">
        {text}
      </div>
    );
  };

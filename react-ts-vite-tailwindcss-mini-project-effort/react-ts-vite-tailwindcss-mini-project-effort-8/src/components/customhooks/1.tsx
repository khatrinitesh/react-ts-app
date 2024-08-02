import React, { useEffect, useState } from 'react'

const CustomHooks = () => {
    const [width,setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[]);

  return width
}

export default CustomHooks
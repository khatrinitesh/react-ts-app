import React from 'react'

const CustomApp:React.FC = () => {
  return (
    <>
      <Image/>
      <Form/>
    </>
  )
}

export default CustomApp

const Image:React.FC = () => {
    return(
        <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}>
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Background" style={{ width: '100%', height: 'auto' }} />
         {/* Import your image and adjust the styles as needed */}
      </div>
    )
}

const Form: React.FC = () => {
    return (
      <form style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px' }}>
        <h2>Form Title</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <button type="submit" className='border-t-neutral-400 bg-slate-400 mt-[10px] px-[10px] py-[5px] rounded-[5px]'>Submit</button>
      </form>
    );
  }
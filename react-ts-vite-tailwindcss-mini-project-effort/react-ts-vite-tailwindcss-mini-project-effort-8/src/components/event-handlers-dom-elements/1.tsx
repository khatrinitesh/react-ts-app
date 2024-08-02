import React, { ChangeEvent, useState } from 'react'

const EventHandlers:React.FC = () => {

    const [value,setValue] = useState<string>('');

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

  return (
    <>
        <input type="text" className='border p-2 outline-none' value={value} onChange={handleChange} />
    </>
  )
}

export default EventHandlers
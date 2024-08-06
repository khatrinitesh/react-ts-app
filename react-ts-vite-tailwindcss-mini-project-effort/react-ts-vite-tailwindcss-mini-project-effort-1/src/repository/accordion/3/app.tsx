import { AccordionInterface } from 'flowbite';
import React, { useState } from 'react';
import { items } from './constants';

const CustomApp = () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default CustomApp


const Accordion:React.FC<AccordionInterface> = ({items}) => {

    const [openItemId,setOpenItemId] = useState<string | null>(null);

    const toggleItem = (id:number) => {
        setOpenItemId(openItemId === id ? null : id);
    }
    return(
        <>
          <div className="space-y-2">
            {items.map(item => (
                <div key={item.id} className={`border border-gray-200 rounded-md ${
                    openItemId === item.id ? 'bg-blue-100' : 'bg-white'
                  }`}>
                <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full px-4 py-2 text-left focus:outline-none ${
                        openItemId === item.id ? 'bg-blue-200 text-blue-800' : 'bg-gray-100 text-gray-800'
                      } border-b border-gray-200 hover:bg-gray-200`}
                >
                    {item.title}
                </button>
                {openItemId === item.id && (
                    <div className="px-4 py-2 bg-white">
                    {item.content}
                    </div>
                )}
                </div>
            ))}
            </div>
        </>
    )
}
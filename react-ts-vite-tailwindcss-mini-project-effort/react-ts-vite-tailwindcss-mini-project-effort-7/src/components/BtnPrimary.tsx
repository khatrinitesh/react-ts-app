
import { BtnPrimaryProps } from '../interface/interface'

const BtnPrimary:React.FC<BtnPrimaryProps> = ({label,onClick}) => {
  return (
    <>
      <button className='bg-black text-white rounded px-10 py-2' onClick={onClick} >{label}</button>
    </>
  )
}

export default BtnPrimary

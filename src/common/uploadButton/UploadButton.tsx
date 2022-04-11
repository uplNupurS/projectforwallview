import Image from 'next/image'
import React from 'react'
import Uploadicon from "../../../public/image/uploadicon.svg"

const UploadButton = () => {
  return (
    <div>
        <button className='flex justify-evenly h-9 w-28 bg-[#2186D7] items-center rounded-md'>
            <Image src={Uploadicon} alt="icon" height={20} width={20} />
            <p className='text-white'>Upload</p>
        </button>
    </div>
  )
}

export default UploadButton
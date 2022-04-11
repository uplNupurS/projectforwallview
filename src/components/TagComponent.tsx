import React from 'react'

const TagComponent = (props:any) => {
  return (
    <>
    <div className={`border-[1px] border-slate-300 rounded-full ${props.width}`} 
    >
        <p className='text-sm flex h-6 items-center px-2'>{props.name}</p>
    </div>
    </>
  )
}

export default TagComponent
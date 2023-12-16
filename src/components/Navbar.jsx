import React from 'react'
import { Menus } from './utils/Helper'
import MenuItem from './MenuItem'
const Navbar = () => {
  return (
   <>
     <div className='fixed right-0 bottom-10 lg:top-0 w-full lg:w-44 flex justify-center lg:items-center  lg:h-screen items-end z-50'>
        <div className=' flex lg:flex-col justify-center items-center border-2 border-slate-600 rounded-full lg:gap-0 gap-5 flex-row py-2 '>
            {Menus && Menus.map((item,index)=>{
                return(
                    <div key={index} className=''>
                        <MenuItem menu={item} index={index}/>
                    </div>
                )
            })}

        </div>
        
    </div>
   </>
  )
}

export default Navbar
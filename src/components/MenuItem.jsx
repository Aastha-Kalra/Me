import React from 'react'
import {AnimatePresence,motion} from 'framer-motion'
const MenuItem = ({menu}) => {
  return (
    <div className='hover:bg-green-500 rounded-full p-3 flex justify-center items-center cursor-pointer'>
    <menu.Icon className="text-gray-200 text-3xl  "/>
    <motion>
      
    </motion>

    </div>
  )
}

export default MenuItem
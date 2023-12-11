import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const About = () => {
  return (
    <section className='flex justify-center items-center flex-col relative my-12 py-12 text-white text-3xl' id='about'>
        {/* title */}
        <div className='w-full flex justify-center items-center py-24'>
            <motion.div
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:200}}
            exit={{opacity:0, width:0}}
            transition={{delay:1.4}}
            className='flex justify-around w-52 items-center'>
                <img src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png" alt="" className='w-14  -scale-x-110 -rotate-45 ' />
<p className='text-4xl px-4 text-green-500'>About </p>
                <img src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png" alt="" className='w-14 rotate-45'  />

            </motion.div>
        </div>

        {/* about me */}
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-full'>
  <div className='w-full flex justify-center items-center px-8'>
    <div className="w-full relative rounded-md lg:w-1/2 p-1 bg-gradient-to-br from-green-500 to-green-600">
      <img src="https://media.licdn.com/dms/image/D5603AQH93Rhk9Ahg2g/profile-displayphoto-shrink_200_200/0/1684078799996?e=1707350400&v=beta&t=o1Kp4znizyo4HTiRJ142Xr1VHXW8fST9Hkp9PUl_2jA" alt="" className='w-full rounded-md h-auto object-contain' />

      <div className="absolute inset-4 bg-gradient-to-br w-4 -top-4 -left-2 from-green-500 to-green-600 rounded-md"></div>
    </div>
  </div>
</div>
    </section>
  )
}

export default About
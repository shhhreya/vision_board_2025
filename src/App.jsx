
import './App.css'
import StarsCanvas from './components/StarBackground'
import {motion} from "framer-motion"
import { AnimatePresence } from 'framer-motion'


function App() {

  const popup = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 4,
        delay:6,
        opacity:0,
      }   
    },
    exit: { opacity: 0, scale: 0 },
  }
  const fadetext = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 10,
        delay:6,
        opacity:0,
        
      }   
    },
    exit: {
      opacity:0,
    }
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren:0.9,
        staggerChildren: 0.6
      }
    }
  };

  const item = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
  
  const item1 = {
    hidden: { x: -200, opacity: 0 },   
    visible: {
      x: 0,
      opacity: 1
    }
  };
  
  const item2 = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1     
    }
  };
  
  const item3 = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3.1    
      }
      
    }
  };
  const item4 = {
    hidden: { y: -200, opacity: 0 }, 
    visible: {
      y: 0,
      opacity: 1 , 
      transition: {
        delay:2.5
      }
    }
  };
  
  const item5 = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1         
    }
  };
  
  const item6 = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
  
  const item7 = {    
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
  const item8 = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };


  return (
    <>
      <div className='bg-black w-full h-full'>     
        <StarsCanvas number={3003} size={0.003}/>
       
         <div className='w-full h-full flex justify-center items-center '>
          <div className='w-[40%] h-[50%]  my-15'> 
         <motion.div className='w-full h-full columns-3 gap-0 ' variants={container} initial="hidden"     animate="visible">
        <motion.img src="../radhakrishna.jpg"  className='w-full h-full'variants={item}  alt="img"/>
        <motion.img src="../family.jpg" className='w-full h-full'variants={item1}  alt="img"/>
        <motion.img src="../krishnasada.jpg" className='w-full h-full'variants={item2}  alt="img"/>
        <motion.img src="../skill.jpg" className='w-full h-full'variants={item3}  alt="img"/>
        <motion.img src="../love.jpg" className='w-full h-full' variants={item4} alt="img"/>
        <motion.img src="../2025.jpg" className='w-full h-full' alt="img"/>
        <motion.img src="../make_money.jpeg"  className='w-full h-full' variants={item5} alt="img"/>
        <motion.img src="../travel.jpg"  className='w-full h-full'variants={item6} alt="img"/>
        <motion.img src="../mental_health.png" className='w-full h-full' variants={item7} alt="img"/>
        <motion.img src="../friends.jpg" className='w-full h-full' variants={item8} alt="img"/>
         </motion.div>
        </div>
         </div>
       <AnimatePresence>
        <motion.div className='w-full h-full flex justify-center items-center absolute top-0 ' variants={popup} initial="hidden" animate="visible" exit="exit"> 
         
          <motion.div className='w-[45%] h-[90%] bg-black/60 flex justify-center items-center'  >
            <motion.div variants={fadetext}>
             <p className='text-gray-300 text-5xl rotate-20 text-center font-serif'>Manifest your DREAM..... <br/> 🎊🎊🎊</p>    
            </motion.div>
          </motion.div> 
        </motion.div> 
       </AnimatePresence>
      </div>  

       
    </>   
  )
}

export default App

import Background from "@/components/Home/Background";
import { motion } from "framer-motion";
import MyLogo from "@/assets/mylogo.png";


const Home = () => {
  return (
    <div className="my-4 flex md:flex-row flex-col">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-3/5 w-full"
      >
        <div className="-mb-10 mt-20 quando ">
          {/* <img className="w-[12rem] fill-white transparent" src={Stroke} /> */}
          <h1 className="text-darkerText relative left-12 bottom-24 text-[2rem]">
            Simplify, Save & Succeed

          </h1>
        </div>
        <div className="md:text-[2rem] text-[1.5rem] ml-10 quando">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            Empowering you with knowledge to save 
            {/* <BsArrowRight className="text-secondary inline ml-6" /> */}
       
          </motion.h1>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
             Grow your wealth, plan, and achieve your dreams with
          </motion.h1>
          <motion.h1 className="md:text-[4rem] text-darkerText" 
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
             Financial Sakhi
          </motion.h1>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
             Your trusted guide to success!
          </motion.h1>
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="w-full flex mt-12 ml-10 overflow-hidden "
        >
          <div className="md:w-1/3 flex align-middle">
            <h1 className="text-5xl my-auto">3</h1>
            <div className="my-auto ml-3 text-gray-400">
              <h1 className="text-sm text-darkerText">Years of</h1>
              <h1 className="text-sm text-darkerText">Experience</h1>
            </div>
          </div>
          <div className="md:w-1/3 flex align-middle">
            <h1 className="text-5xl my-auto">5M</h1>
            <div className="my-auto ml-3 text-gray-400">
              <h1 className="text-sm text-darkerText">Users</h1>
              <h1 className="text-sm text-darkerText">Served</h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
        <div className="md:w-2/5 max-w-screen overflow-hiddenw-230 h-70 ">
          <Background />
          <div className="mt-[12rem]">
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              className="absolute ml-1 mr-1" 
            >
              <img src={MyLogo} alt="My Logo" className="w-130 h-70" /> {}
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

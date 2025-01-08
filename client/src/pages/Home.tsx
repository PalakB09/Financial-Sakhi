import Background from "@/components/Home/Background";
import { motion } from "framer-motion";
import MyLogo from "@/assets/mylogo.png";

const translations = {
  en: {
    heading: "Simplify, Save & Succeed",
    subHeading1: "Empowering you with knowledge to save",
    subHeading2: "Grow your wealth, plan, and achieve your dreams with",
    tagline: "Financial Sakhi",
    footer: "Your trusted guide to success!",
  },
  hi: {
    heading: "सरल, बचत और सफलता प्राप्त करें",
    subHeading1: "आपको बचत के लिए ज्ञान प्रदान करना",
    subHeading2: "अपनी संपत्ति बढ़ाएं, योजना बनाएं, और अपने सपने पूरे करें",
    tagline: "फाइनेंशियल सखी",
    footer: "सफलता के लिए आपका विश्वसनीय साथी!",
  },
};

interface HomeProps {
  language: 'en' | 'hi';
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const content = translations[language];

  return (
    <div className="my-4 flex md:flex-row flex-col">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-3/5 w-full"
      >
        <div className="-mb-10 mt-20 quando">
          <h1 className="text-darkerText relative left-12 bottom-24 text-[2rem]">
            {content.heading}
          </h1>
        </div>
        <div className="md:text-[2rem] text-[1.5rem] ml-10 quando">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            {content.subHeading1}
          </motion.h1>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {content.subHeading2}
          </motion.h1>
          <motion.h1
            className="md:text-[4rem] text-darkerText"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {content.tagline}
          </motion.h1>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {content.footer}
          </motion.h1>
        </div>
      </motion.div>
      <div className="md:w-2/5 max-w-screen overflow-hidden w-230 h-70">
        <Background />
        <div className="mt-[12rem]">
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="absolute ml-1 mr-1"
          >
            <img src={MyLogo} alt="My Logo" className="w-130 h-70" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

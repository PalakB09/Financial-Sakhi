import { motion } from "framer-motion";
import { Atropos } from "atropos/react";
import SignupImage from "@/assets/1234.png";
import { LoginFormDemo } from "@/components/auth/LoginForm";

const animationProps = {
  initial: { x: 0, rotateY: -180, scale: 0.85 },
  animate: { x: 0, rotateY: 0, scale: 1, transition: { duration: 1.2 } },
};

const Login = () => {
  return (
    <motion.div
      {...animationProps}
      className="pt-24 max-h-screen overflow-hidden flex md:flex-row flex-col-reverse align-middle justify-center"
    >
      <div className="flex justify-center align-middle">
        <LoginFormDemo />
      </div>
      <div className="flex justify-center align-middle md:w-1/2 hover:opacity-90">
        <Atropos
          activeOffset={70}
          shadowScale={1.05}
          shadow={false}
          onEnter={() => console.log("Enter")}
          onLeave={() => console.log("Leave")}
          onRotate={(x, y) => console.log("Rotate", x, y)}
          className="m-auto "
        >
          <img src={SignupImage} className="transform -scale-x-100 md:max-w-1500 max-w-50" />
        </Atropos>
      </div>
    </motion.div>
  );
};

export default Login;

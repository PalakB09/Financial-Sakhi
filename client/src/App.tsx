import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "atropos/css";

import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import Login from "@/pages/Login";
import _404 from "@/pages/_404";
import DynamicBackground from "@/components/DynamicBackground";
import Signup from "@/pages/Signup";
import { GlobalState } from "@/context/GlobalContext";
import { AuthState } from "@/context/AuthContext";
import Services from "@/pages/Services";
import Funds from "@/pages/Fund/Funds";
import CreateFund from "@/pages/Fund/CreateFund";
import Loading from "@/components/Loading";
import JoinFund from "@/pages/Fund/JoinFund";
import { FundState } from "@/context/FundContext";
import Deposit from "@/pages/Banking/Deposit";
import Withdraw from "@/pages/Banking/Withdraw";
import Loans from "./pages/Loans";
import RequestLoan from "./pages/Loan/RequestLoan";
import { LoanState } from "./context/LoanContext";
import Success from "./pages/Success";
import Fund from "./pages/Fund/Fund";
import Transactions from "./pages/Transactions";
import Government from "./pages/Government";
import AI from "./pages/AI";
import Courses from './pages/Courses';
import SmartMoneyBasics from "@/pages/smart-money-basics"; // Import the component
import InvestingFundamentals from "@/pages/investing-fundamentals"; // Import the component


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        theme="dark"
        closeOnClick
        rtl={false}
        pauseOnHover
        limit={2}
      />
      <DynamicBackground />
      <GlobalState>
        <Loading />
        <AuthState>
          <FundState>
            <LoanState>
          <div className="py-6 md:px-12 px-4">
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/services" element={<Services />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/government" element={<Government />} />
                <Route path="/ai" element={<AI />} />

                {/* Add the new route */}
                <Route path="/smart-money-basics" element={<SmartMoneyBasics />} />
                <Route path="/investing-fundamentals" element={<InvestingFundamentals />} />


                {/* Services */}
                <Route path="/funds" element={<Funds />} />
                <Route path="/createfund" element={<CreateFund />} />
                <Route path="/joinfund/:id" element={<JoinFund />} />
                <Route path="/fund/:id" element={<Fund />} />
                <Route path="/transactions" element={<Transactions />} />

                {/* Banking */}
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />

                {/* Loans */}
                <Route path="/loans" element={<Loans />} />
                <Route path="/getloan" element={<RequestLoan />} />

                <Route path="*" element={<_404 />} />
                <Route path="/success" element={<Success/>} />
              </Routes>
            </Router>
          </div>
          </LoanState>
          </FundState>
        </AuthState>
      </GlobalState>
    </>
  );
}

export default App;

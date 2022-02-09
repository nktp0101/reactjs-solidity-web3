import "./App.css";
import { ethers } from "ethers";
import { ContractTest } from "./web3/contracts/test";
import { useState } from "react";
import { useForm } from "react-hook-form";
import WalletCard from "./walletCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const contract = new ContractTest(provider);
  const [fullName, setFullName] = useState("FullName here");

  const getFullNameTest = async () => {
    try {
      const res = await contract.getFullName();
      setFullName(res);
      toast.success("Get FullName Success!");
    } catch (error) {
      toast.error(error);
    }
  };

  const setFullNameTest = async (name) => {
    try {
      await contract.setFullName(name);
      toast.success("Changed FullName Success!");
    } catch (error) {
      toast.error(error);
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const fullName = data?.fullName;
    setFullNameTest(fullName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Smart Contract</p>

        <WalletCard />
        <div>
          <div className="box">
            <button className="btn" onClick={() => getFullNameTest()}>
              Get FullName
            </button>
            <span className="mr-2">{fullName}</span>
          </div>

          <form className="box" onSubmit={handleSubmit(onSubmit)}>
            <button className="btn" type="submit">
              Set FullName
            </button>
            <input className="ip mr-2" {...register("fullName")} />
          </form>
        </div>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;

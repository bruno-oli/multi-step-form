import { createContext, useState } from "react";

export const StepContext = createContext();

const StepProvider = ({ children }) => {
  const [step, setStep] = useState(3);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState({
    yearly: false,
    planActive: {
      name: 'arcade',
      price: {
        m: 9,
        y: 90,
      }
    }
  })
  const [onlineService, setOnlineService] = useState(false)
  const [largerStorage, setLargerStorage] = useState(false)
  const [customizableProfile, setCustomizableProfile] = useState(false)
  return (
    <StepContext.Provider
      value={{
        step,
        setStep,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        plan,
        setPlan,
        onlineService,
        setOnlineService,
        largerStorage,
        setLargerStorage,
        customizableProfile,
        setCustomizableProfile,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;

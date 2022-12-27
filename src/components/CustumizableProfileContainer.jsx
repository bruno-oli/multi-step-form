import React, { useContext } from "react";

import AddOnStyle from "./AddOnStyle";
import { StepContext } from "../contexts/StepContext";

const CustumizableProfileContainer = () => {
  const { plan } = useContext(StepContext);
  const { customizableProfile, setCustomizableProfile } =
    useContext(StepContext);
  return (
    <AddOnStyle
      style={{ background: customizableProfile ? "#adbdff3b" : "transparent" }}
    >
      <div>
        <input
          value={customizableProfile}
          onChange={() => setCustomizableProfile(!customizableProfile)}
          type={"checkbox"}
        />
        <div>
          <span className="name">Customizable profile</span>
          <span className="description">Custom theme on your profile</span>
        </div>
      </div>
      <span className="price">{plan.yearly ? "+2$/yr" : "+20/mo"}</span>
    </AddOnStyle>
  );
};

export default CustumizableProfileContainer;

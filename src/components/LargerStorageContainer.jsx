import React, { useContext } from "react";

import AddOnStyle from "./AddOnStyle";
import { StepContext } from "../contexts/StepContext";

const LargerStorageContainer = () => {
  const { plan } = useContext(StepContext);
  const { largerStorage, setLargerStorage } = useContext(StepContext);
  return (
    <AddOnStyle
      style={{ background: largerStorage ? "#adbdff3b" : "transparent" }}
    >
      <div>
        <input
          value={largerStorage}
          onChange={() => setLargerStorage(!largerStorage)}
          type={"checkbox"}
        />
        <div>
          <span className="name">Larger storage</span>
          <span className="description">Extra 1TB of cloud save</span>
        </div>
      </div>
      <span className="price">{plan.yearly ? "+2$/yr" : "+20/mo"}</span>
    </AddOnStyle>
  );
};

export default LargerStorageContainer;

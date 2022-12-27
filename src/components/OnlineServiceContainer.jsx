import React, { useContext } from "react";

import AddOnStyle from "./AddOnStyle";
import { StepContext } from "../contexts/StepContext";

const OnlineServiceContainer = () => {
  const { plan } = useContext(StepContext);
  const { onlineService, setOnlineService } = useContext(StepContext);
  return (
    <AddOnStyle
      style={{ background: onlineService ? "#adbdff3b" : "transparent" }}
    >
      <div>
        <input
          value={onlineService}
          onChange={() => setOnlineService(!onlineService)}
          type={"checkbox"}
        />
        <div>
          <span className="name">Online service</span>
          <span className="description">Access to multiplayer games</span>
        </div>
      </div>
      <span className="price">{plan.yearly ? "+1$/yr" : "+10/mo"}</span>
    </AddOnStyle>
  );
};

export default OnlineServiceContainer;

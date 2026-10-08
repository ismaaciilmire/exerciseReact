import { useState } from "react";

const Exercise4=()=> {
  const [button, setButton] = useState(false);

  return (
    <div>
      <button onClick={() => setButton(!button)}>
        {button ? "Turn Off" : "Turn On"}
      </button>

      <h2>{button ? "the button is On" : "the button is Off"}</h2>
    </div>
  );
}

export default Exercise4;
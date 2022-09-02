import React from "react";

function Button({label}) {
  return (
    <div>
      <button className="peek-button" type={"button"}>
        {label}
      </button>
    </div>
  );
}

export default Button;

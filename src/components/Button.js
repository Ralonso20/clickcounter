import React from "react";
import '../stylesheets/Button.css'
function Button({text, clickButton, clickManage}) {
  return(
		<button
			className={clickButton ? 'click-button' : 'reset-button'}
			onClick={clickManage}>
			{text}
		</button>
	);  
}

export default Button;
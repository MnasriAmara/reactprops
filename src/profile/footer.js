import React from "react";

const Footer = props => {
    
    return (
        <div>
      <button onClick={ props.nom} style={{ width:105,height: 35,textAlign:"center", margin:4 , boxShadow: "10px 5px 5px red" }}>
        ClickMe
      </button>
      </div>
    );
}



Footer.defaultProps = {
    title: "Mnasri Amara"
   };
export default Footer
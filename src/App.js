// import './App.css';
import React from "react";
import Profile from "./profile/Profile";
import Footer from "./profile/footer";



function App() {

  function myName ()  {
    alert("Mnasri Amara");
  };
   


  const biog = (
    <p style={{ width:635, textAlign:"center" }}>
      
      Mnasri Amara,  né le 20 octobre 1989
       Un informaticien, Full Stack Web developer.
       Un informaticien, Full Stack Web developer.
    </p>
  );


  return (
    <div className="App"
      style={{border: "2px gray solid",borderRadius: 25,display: "flex",flexDirection:"column",alignItems: "center",
        width: 750,padding: 5,margin: "30px auto",backgroundColor:"beige", padding:"1px", boxShadow: "10px 10px 10px 10px gray"}} >
          {/* <div style ={{ border:"2px red solid" , Height:"5px"}}>  */}
            <span><img src="dev.png" alt="photo developer" style={{width:175, height:155 , borderRadius:"10px 100px / 120px", margin:3, boxShadow:"10px 5px 5px red" }} /></span>
         {/* </div> */}
          <Profile firstName="Mnasri" lastName="Amara" Age="32" Profession="full Stack Developer"Bio={biog} />
          
        <Footer nom={myName} />
     
             
          
    </div>
  ); 
}

export default App;

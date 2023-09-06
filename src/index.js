
import ReactDOM from 'react-dom/client';
// import "./index.css";
import src from "./college entrance exam-pana.png" ;

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting( {name , city , age , contact}){
   
    return (
      <>
     <div style={{
  backgroundColor: "blanchedalmond",
  margin: "20px",
  height: "190px",
  padding:" 20px",
  borderRadius:" 20px",
  width: "600px",
  display:" block",
  margin: "10px auto",
}}> 

     <img src= {src} style={{
  height :"100px",
  display :" block",
  margin : "10px auto",
}}/>
      <h3 style={{
  textAlign: "center",
  
}}>My Name is  {name} I am from {city} I am {age} years old , <br/>
      contact me {contact}</h3>
     </div>
   
      <hr/>
      </>
    )
    }
root.render(
 <>
  <Greeting name="Bandini" city="Ballarpur " age="22" contact="9503506772"/>
  
  <Greeting name="Nikita" city="Nagpur" age="20" contact="9503506772"/>
 </>
);



import React ,{useState} from 'react'
import './Chat.css';


export default function Chat({Id}){
const [ hide,setHide]=useState(false);

  const handlehover =() => {
   setHide(!hide);
  }
  return( <div key={Id}className={`chat__window ${hide ? 'hide':''}`}>
        <div className="chat__header"><div className="chat__titile">C</div>{Id}
        <div className="chat__close" onClick={handlehover}>

    {

    hide?<span>&#8215;</span>:  <span>&#x78;</span>
    }
       
        
        </div>
        </div> 
           <div className={`chat__body ${hide ? 'hide':''}`}>
        Hello...
        </div>
        <div className={`chat__footer ${hide ? 'hide':''}`}>
       <input type="text" placeholder="Enter message"/>
       <button><span>&#8627;</span>
</button>

        </div>
    </div>);
   
  
}
import { useState } from "react";

const Fnuser =(props)=>{

const [ count, setCount ] = useState(0)

return(
          <div className="user-card">
                    <h1>Name:{props.name} </h1>
                    <h3>location:{props.location} </h3>
                    <h3>functional component </h3>
                    <h3>Count = {count}</h3>
                    <button onClick={()=>{
                       setCount(count + 1)
                    }}>Countincrease</button>
          </div>
)
}
export default Fnuser;
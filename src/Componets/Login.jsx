import React, { useState } from "react";
import "./login.css"
import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Login = () => {

//   const [showPassword, setShowPassword] = useState(false);
//   let uday = (event)=>{
//     setShowPassword(!event.target.checked)
//   }

//   return (
//     <div className="container">

//       <div className="card">

//         <h2>Registration</h2>
//         <input
//           type="text"
//           placeholder="Enter Username"
//           className="input"
//         />

//        <div className="password-box">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter Password"
//             className="input"
//           />
//           <span
//             className="eye"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
// <div>
//     <input type="checkbox" onClick={uday}/> Please Accept T&C
// </div>
//         </div>


//         <button className="btn" disabled={showPassword}>Login</button>

//       </div>

//     </div>
//   );
// };

// export default Login;



const Login = () => {
    const[showPassword,setShowPassword]=useState();
    const uday=(event)=>{
        setShowPassword(!event.target.checked)
    }

  return (
    <div className="container">
        <div className="card">
           <center> <h1>Registration</h1></center>
           <div>
           <input type="text" placeholder="Enter Username" className="input"/>
           </div>
           <div className="password-box">
           <input type="password" placeholder="Enter Password" className="input" />
           </div>
           <div>
            <input type="checkbox" onClick={uday}/>Please Turn T&C
           </div>
           <div>
            <button className="btn" disabled={showPassword}>Login</button>
           </div>
        </div>
    </div>
  )
}

export default Login
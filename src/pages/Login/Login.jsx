import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [show, setShow] = useState(true);
  function fnUp(e){
    console.log(e.target.value);
    console.log(e.target.value);
    console.log(e.target.value);
    console.log(e.target.value);
    console.log(e.target.value);
    e.preventDefault()
  }
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        {show ? (
          <div className="up">
            <form onSubmit={fnUp} action="#">
              <input
                className="form-control mb-3 border border-info"
                type="text" name="username"
                 placeholder="username"
              />
              <input
                className="form-control mb-3 border border-info"
                type="text" name="email"
                 placeholder="email"
              />
              <input
                className="form-control mb-3 border border-info"
                type="tel"
                name="tel" placeholder="tel"
              />
              <input
                className="form-control mb-3 border border-info"
                type="text" name="password"
                 placeholder="password"
              />
              <input
                className="form-control mb-3 border border-info"
                type="text" name="confirm"
                 placeholder="password confirm"
              />
              <button className="btn btn-info">Login up</button>
              <p>Already have an accaunt ?<button onClick={()=>setShow(false)} className='btn btn-link'>Sign in</button></p>
            </form>
          </div>
        ) : (
          <div className="in">
            <form action="#">
              <input
                className="form-control mb-3 border border-info"
                type="text"
                placeholder="username"
              />
              <input
                className="form-control mb-3 border border-info"
                type="text"
                placeholder="password"
              />
              <button className="btn btn-info">Login in</button>
              <p>Do not have you an accaunt ? <button onClick={()=> setShow(true)} className="btn btn-link">Sign up</button></p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;

import { useState } from "react";
import "../Css/Login.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={`container-login ${isLogin ? "login-mode" : "signup-mode"}`}>
      <div className="form-log">
        <h2 className="hlog">{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          {!isLogin && <input className="inlog"  type="text" placeholder="User Name" required />}
          <input  className="inlog" type="email" placeholder="Email" required />
          <input  className="inlog" type="password" placeholder="Password" required />
          <button className="logbtn">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} className="plog">
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
        <div className="logdiv">Welcome</div>
      </div>
    </div>
  );
};

export default AuthForm;

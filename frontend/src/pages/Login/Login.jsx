import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import "./Login.css";

function Login() {
  const { email, setEmail, password, setPassword, handleSubmitLogin, error } = useLogin();
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1 className="login-heading">Sign in</h1>
      <form onSubmit={handleSubmitLogin} className="login-form">
        <label htmlFor="email" className="login-label">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className="login-input"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="login-label">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="login-input"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button
          type="submit"
          className="login-button"
        >
          Sign In
        </button>
      </form>
      <div className="login-links">
        <a href="#" className="login-link">Forgot password?</a>
        <a href="#" className="login-link" onClick={() => navigate("/register")}>Don't have an account? Sign Up</a>
      </div>
    </div>
  );
}

export default Login;



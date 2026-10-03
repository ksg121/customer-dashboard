import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
    setResetMessage("");
  };

  const handleForgotPassword = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((previous) => ({ ...previous, email: "Enter a valid email address to reset your password" }));
      return;
    }
    setResetMessage(`Demo reset link sent to ${formData.email}.`);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", formData.email);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-brand">
          <div className="brand-logo">
            <span>CD</span>
          </div>

          <h1>CustomerDesk</h1>
          <p>Service Management Dashboard</p>
        </div>

        <div className="login-card">
          <div className="login-header">
            <h2>Welcome back</h2>
            <p>Sign in to continue to your dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>

              <div className={`input-wrapper ${errors.email ? "input-error" : ""}`}>
                <Mail size={18} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div
                className={`input-wrapper ${
                  errors.password ? "input-error" : ""
                }`}
              >
                <Lock size={18} />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="login-button">
              <LogIn size={18} />
              Login
            </button>
            <button type="button" className="forgot-password-button" onClick={handleForgotPassword}>
              Forgot password?
            </button>
            {resetMessage && <p className="login-success" role="status">{resetMessage}</p>}
          </form>

          <div className="login-demo">
            <span>Demo application</span>
            <small>No backend required</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

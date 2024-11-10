import React, { useState } from 'react';
import styles from './Login.module.css';

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.rocketContainer}>
        <img 
          src="/images/login/rocket-login.png" 
          alt="Rocket Illustration" 
          className={styles.rocketImage} 
        />
      </div>

      <div className={styles.loginForm}>
        {/* Render Login Form if isSignUp is false, otherwise render Sign-Up Form */}
        {!isSignUp ? (
          <>
            <h2>Login</h2>

            <input 
              type="text" 
              placeholder="Username" 
              className={styles.input} 
            />
            
            <input 
              type="password" 
              placeholder="Password" 
              className={styles.input} 
            />
            
            <button className={styles.loginButton}>Login</button>

            <p className={styles.signupText}>
              Don't have an account? 
              <button className={styles.signupLink} onClick={handleToggleForm}>
                Sign up
              </button>
            </p>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>

            <input 
              type="text" 
              placeholder="Username" 
              className={styles.input} 
            />

            <input 
              type="email" 
              placeholder="Email" 
              className={styles.input} 
            />
            
            <input 
              type="password" 
              placeholder="Password" 
              className={styles.input} 
            />
            
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className={styles.input} 
            />

            <button className={styles.loginButton}>Sign Up</button>

            <p className={styles.signupText}>
              Already have an account? 
              <button className={styles.signupLink} onClick={handleToggleForm}>
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;

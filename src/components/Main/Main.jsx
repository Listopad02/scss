import "./Main.scss";

const Main = () => {

  return (
    <div className='login'>
      <div className='login-container'>

        <div className="login-title">
          <h1>Welcome back</h1>
          <h2>Please enter your details</h2>
        </div>

        <div className="login-forms">
          <p>Login</p>
          <input type="text" 
                 placeholder='Enter your login' />
          <p>Password</p>
          <input type="password" 
                 placeholder='••••••' />
        </div>

        <div className="login-options">
          <button>Sign in</button>
          <p>Don't have an account?
              <span className='link'>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
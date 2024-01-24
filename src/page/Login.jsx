import React, { useState } from 'react';
import logo from "../assets/football_logo.png"
import login from "../assets/football-dollar.jpg"
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleLogin = async(e) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
        
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setError('Please enter a valid email address.');
      return;
    }
    
        
    if (password.length < 7) {
      setError('Password must be at least 7 characters long.');
      return;
    }
    
    const url = 'http://127.0.0.1:8000/login';
    try {

      const response = await axios.post(`${url}?username=${username}&password=${password}`);
      if (response.status === 200) {
        setSuccess(true);
        setError('');
        console.log("pass ho gaya")
        setSuccess(true);
        navigate('/Dashboard');
      } else {
        setError(response.data.detail || 'Signup failed');
        setSuccess(false);
      }
    } catch (error) {
      setError('your email or password is incorrect or create account ');
      setSuccess(false);
    }
  }
    const handlesignup = (e) => {
      e.preventDefault();
      navigate('/Signup');
    };
    
  return (
      <section className="bg-white ">
      <div className="flex justify-center min-h-screen">
          <div className="hidden md:flex w-fu ll justify-center items-center h-screen" >
              <img src={login} alt="" className="h-screen object-cover"/>
          </div>
          <div className="w-full max-w-4xl p-8 mx-auto  ">
          <div className="flex justify-center  " >
              <img src={logo} alt="" className="w-32 object-contain bg-white p-3"/>
          </div>
            <div className="mx-auto bg-primary px-4 py-16 relative sm:w-2/3 w-full">
              <h1 className="text-lg text-white font-bold tracking-wider text-center ">
              Login</h1>
                  <form className="grid w-full" onSubmit={handleLogin}>
                  <Input
                  name={"Email"}
                  placeholder={"Email"}
                  value={username}
                  handleChange={handleUsernameChange}
                  type={"text"}
                />
                  <Input
                  name={"password"}
                  placeholder={"Password"}
                  handleChange={handlePasswordChange}
                  value={password}
                  type={"password"}
                />
    <div className="w-full flex mt-3">
        <Button text={"Log in"}
        
          />
    </div>
                  
                  </form>
                    <div className="w-full flex mt-3">
                    <button  className="w-full  text-white font-bold py-3 px-4" type="button" onClick={handlesignup}>
                      Sign up
                    </button>


                    
                    </div>
                    {error && (
                      <div className="mt-3 text-yellow-500 flex items-center justify-center ml-3">
                        <p>{error}</p>
                      </div>
                    )}

                    
                    
                </div>
                
            </div>
        </div>
    </section>
  )
};

export default Login;

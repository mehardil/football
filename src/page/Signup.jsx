import React, { useState } from 'react';
import signup from "../assets/football_login.jpg"
import logo from "../assets/football_logo.png"
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button'; 
import SelectInput from '../Components/Input/SelectInput'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Signup= () => {
  const [inputData, setInputData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    address: '',
    plan_id: '',
    state: '',
    post_code: '',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
      
    }));
    console.log(inputData.first_name)
  };

  const navigate = useNavigate();
  const handleSignupInfo = async(e) => {
    e.preventDefault();
    
    if (!inputData.username.trim() || !inputData.password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!usernameRegex.test(inputData.username)) {
      setError('Please enter a valid username address.');
      return;
    }
    
        
    if (inputData.password.length < 7) {
      setError('Password must be at least 7 characters long.');
      return;
    }

    if (inputData.password !== inputData.confirm_password) {
      setError('Password and confirm password must match.');
      return;
    }
    
    const url = 'http://127.0.0.1:8000/signup';
    try {
      const response = await axios.post(`${url}?username=${inputData.username}&password=${inputData.password}`);
      if (response.status === 200) {
        setSuccess(true);
        setError('');
        console.log("pass ho gaya")
        navigate('/');
      } else {
        setError(response.data.detail || 'Signup failed');
        setSuccess(false);
      }
    } catch (error) {
      setError('you already signup');
      console.log("fail ho gaya")
      setSuccess(false);
    }
  };

  const plans = []; 
  return (
    <section className="bg-white">
      <div className="flex justify-center lg:justify-end min-h-screen relative">
        <div className="lg:fixed hidden lg:block top-0 left-0 items-center w-1/2 overflow-hidden h-screen">
          <img src={signup} alt="" className="h-screen object-cover" />
        </div>

        <div className="flex items-center p-8 lg:mr-10">
          <div className="mx-auto bg-primary px-4 py-16 relative">
            <div className="flex justify-center absolute -top-12 right-0 left-0">
              <img src={logo} alt="" className="w-28 object-contain bg-white p-3" />
            </div>
            <h1 className="text-lg text-white font-bold tracking-wider text-center">
              Register Here
            </h1>

            <form className="grid" onSubmit={handleSignupInfo}>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  name={'first_name'}
                  placeholder={'First Name'}
                  handleChange={handleChange}
                  value={inputData.first_name}
                  type={'text'}
                />
                <Input
                  name={'last_name'}
                  placeholder={'Last Name'}
                  handleChange={handleChange}
                  value={inputData.last_name}
                  type={'text'}
                />
              </div>
              <Input
                name={'username'}
                placeholder={'username'}
                handleChange={handleChange}
                value={inputData.username}
                type={'username'}
              />
              <Input
                name={'address'}
                placeholder={'Address'}
                handleChange={handleChange}
                value={inputData.address}
                type={'text'}
              />
              <SelectInput
                name={'plan_id'}
                data={plans}
                placeholder={'Select a plan'}
                handleChange={handleChange}
                value={inputData.plan_id}
                type={'text'}
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  name={'state'}
                  placeholder={'State'}
                  handleChange={handleChange}
                  value={inputData.state}
                  type={'text'}
                />
                <Input
                  name={'post_code'}
                  placeholder={'Postcode'}
                  handleChange={handleChange}
                  value={inputData.post_code}
                  type={'text'}
                />
              </div>
              <Input
                name={'password'}
                placeholder={'Password'}
                handleChange={handleChange}
                value={inputData.password}
                type={'password'}
              />
              <Input
                name={'confirm_password'}
                placeholder={'Confirm Password'}
                handleChange={handleChange}
                value={inputData.confirm_password}
                type={'password'}
              />

              <div className="w-full flex mt-3">
                <Button text={'Sign up'} />
              </div>
              <div className="w-full flex mt-3">
                    <button  className="w-full  text-white font-bold py-3 px-4" type="button" >
                    <Link to="/">back to Login page</Link>
                    </button>
              </div>
            </form>
            {error && (
                      <div className="mt-3 text-yellow-500 flex items-center justify-center ml-3">
                        <p>{error}</p>
                      </div>
          )}
          
          </div>

        </div>
      </div>
    </section>
  );
};

export default Signup;

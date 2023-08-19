import { Label, TextInput, Button } from "flowbite-react";
import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLoginMutation } from "../services/authApi";
import { addUser } from "../services/authSlice";

const Login = () => {
  const [email,setEmail] = useState('admin@gmail.com')
  const [password,setPassword] = useState('thepassword');
  const [isLoading,setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation()
  
  const loginHandler = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const user = { email, password };
      try {
        const {data} = await login(user)
        if (data) {
          dispatch(addUser({user:data?.accessToken,token:data?.plainTextToken}))
          navigate('/')
        } else {
          console.error("Login failed:", data?.error);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  
  return (
    <div className="flex justify-center items-center background h-screen">
        <div className=" bg-[#323232] w-[400px] rounded-md">
          <form onSubmit={loginHandler} className="  flex max-w-md flex-col gap-4 py-5 px-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Your email"
                  className=" text-[#B19777] text-lg"
                />
              </div>
              <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-input"
                id="email"
                placeholder="example@gmail.com"
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  className="text-[#B19777] text-lg"
                  value="Your password"
                />
              </div>
              <TextInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               id="password1"
                required type="password" />
            </div>
             {isLoading ? (
               <Button type='submit' className="bg-black text-white disabled: submit-btn mt-5">
              Loading
             </Button>
             ) : (
              <Button type='submit' className="bg-[#B19777] submit-btn mt-5">
              Log In
            </Button>
             )}
          </form>
        </div>
      </div>
  );
};

export default Login;

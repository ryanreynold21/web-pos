import { Label, TextInput, Button } from "flowbite-react";
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="flex justify-center items-center background h-screen">
        <div className=" bg-[#323232] w-[400px] rounded-md">
          <form className="  flex max-w-md flex-col gap-4 py-5 px-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Your email"
                  className=" text-[#B19777] text-lg"
                />
              </div>
              <TextInput
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
              <TextInput id="password1" required type="password" />
            </div>
            <Button className="bg-[#B19777] submit-btn mt-5" type="submit">
              Log In
            </Button>
          </form>
        </div>
      </div>
  );
};

export default Login;

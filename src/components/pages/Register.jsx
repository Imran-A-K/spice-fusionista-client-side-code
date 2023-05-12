/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import trees from "../../assets/trees.jpg";
import loginImg from "../../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import githubImg from "../../assets/github-mark.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser,logOut, updateUserProfile, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location)
  const to = location.state?.from?.from?.pathname || "/";
  const from = location.state?.from?.from?.pathname || "/";

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [photoUrl, setPhotoUrl] = useState("");
  const [photoUrlError, setPhotoUrlError] = useState("");

  const handleEmail = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name, email, password, photoUrl);
    if (emailError) {
      event.target.email.focus();
      return;
    } else if (passwordError) {
      event.target.password.focus();
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        updateUserProfile(result.user, name, photoUrl);
        // console.log(createdUser);
        logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
        // navigate(from, { replace: true });
        navigate('/login');      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        navigate(to, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(to, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center mt-6">
      <div className=" w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl text-center font-semibold mb-3">
            Please enter you details
          </h1>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Name</label>
              <input
                className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
                  name
                    ? nameError
                      ? "border-red-500"
                      : "border-green-500"
                    : "border-gray-300 focus:border-blue-600"
                }`}
                placeholder="Enter your name"
                name="name"
                required
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Email</label>
              <input
                className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
                  email
                    ? emailError
                      ? "border-red-500"
                      : "border-green-500"
                    : "border-gray-300 focus:border-blue-600"
                }`}
                placeholder="Enter your email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmail}
                required
              />

              {emailError && (
                <span className="text-red-500 text-sm m-0">{emailError}</span>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
                  password
                    ? passwordError
                      ? "border-red-500"
                      : "border-green-500"
                    : "border-gray-300 focus:border-blue-600"
                }`}
                placeholder="Enter your email"
                type={"password"}
                name="password"
                id="password"
                value={password}
                onChange={handlePassword}
                required
              />

              {passwordError && (
                <span className="text-red-500 text-sm m-0">
                  {passwordError}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Photo URL</label>
              <input
                className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
                  photoUrl
                    ? photoUrlError
                      ? "border-red-500"
                      : "border-green-500"
                    : "border-gray-300 focus:border-blue-600"
                }`}
                placeholder="Enter your photoUrl"
                name="photoUrl"
                onChange={(event) => setPhotoUrl(event.target.value)}
                required
              />
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className=" active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-teal-500 rounded-xl text-white font-bold text-lg"
              >
                Register
              </button>

              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base">
                  Already have an account?
                </p>
                {/* <Link to="/login" state={{ to: to }}> */}
                <Link to="/login">
                  <button
                    // onClick={() => setAuthState('register')}
                    className="ml-2 font-medium text-base text-green-500"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={() => handleGoogleSignIn()}
            className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                fill="#EA4335"
              />
              <path
                d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                fill="#34A853"
              />
              <path
                d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                fill="#4A90E2"
              />
              <path
                d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                fill="#FBBC05"
              />
            </svg>
            Sign up with Google
          </button>
          <button
            onClick={() => handleGitHubSignIn()}
            className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 "
          >
            <img className="w-7" src={githubImg} alt="" />
            Sign up with Github
          </button>
        </div>
      </div>
    </div>
    //   <div className="flex justify-center mt-6">
    //     <form
    //     onSubmit={handleSubmit}
    //     >
    // <div className=" w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
    //       <h1 className="text-4xl text-center font-semibold mb-3">Please enter you details</h1>
    //       <div className="mt-8">
    //         <div className="flex flex-col">
    //           <label className="text-lg font-medium">Name</label>
    //           <input
    //             className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
    //               name
    //                 ? nameError
    //                   ? "border-red-500"
    //                   : "border-green-500"
    //                 : "border-gray-300 focus:border-blue-600"
    //             }`}
    //             placeholder="Enter your name"
    //             name="name"
    //             required
    //             onChange={(event) => setName(event.target.value)}
    //           />
    //         </div>
    //         <div className="flex flex-col">
    //           <label className="text-lg font-medium">Email</label>
    //           <input
    //             className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
    //               email
    //                 ? emailError
    //                   ? "border-red-500"
    //                   : "border-green-500"
    //                 : "border-gray-300 focus:border-blue-600"
    //             }`}
    //             placeholder="Enter your email"
    //             name="email"
    //             id="email"
    //           value={email}
    //           onChange={handleEmail}
    //           required
    //           />
    //           <label
    //           htmlFor="email"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Email address
    //         </label>
    //         {emailError && <span className="text-red-500 text-sm m-0">{emailError}</span>}
    //         </div>
    //         <div className="flex flex-col mt-4">
    //           <label className="text-lg font-medium">Password</label>
    //           <input
    //             className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
    //               password
    //                 ? passwordError
    //                   ? "border-red-500"
    //                   : "border-green-500"
    //                 : "border-gray-300 focus:border-blue-600"
    //             }`}
    //             placeholder="Enter your email"
    //             type={"password"}
    //             name="password"
    //             id="password"
    //           value={password}
    //           onChange={handlePassword}
    //           required
    //           />
    //           <label
    //           htmlFor="floating_password"
    //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Password
    //         </label>
    //         {passwordError && <span className="text-red-500 text-sm m-0">{passwordError}</span>}
    //         </div>
    //         <div className="flex flex-col">
    //           <label className="text-lg font-medium">Photo URL</label>
    //           <input
    //             className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent ${
    //               photoUrl
    //                 ? photoUrlError
    //                   ? "border-red-500"
    //                   : "border-green-500"
    //                 : "border-gray-300 focus:border-blue-600"
    //             }`}
    //             placeholder="Enter your photoUrl"
    //             name="photoUrl"
    //             onChange={(event) => setPhotoUrl(event.target.value)}
    //             required
    //           />
    //         </div>
    //         {/* <div className="mt-8 flex justify-between items-center">
    //           <div>
    //             <input type="checkbox" id="remember" />
    //             <label className="ml-2 font-medium text-base" htmlFor="remember">
    //               Remember for 30 days
    //             </label>
    //           </div>
    //           <button className="font-medium text-base text-violet-500">
    //             Forgot password
    //           </button>
    //         </div> */}
    //         <div className="mt-8 flex flex-col gap-y-4">
    //           <button type='submit' className=" active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-teal-500 rounded-xl text-white font-bold text-lg">
    //             Register
    //           </button>
    //           <div className="mt-8 flex flex-col gap-y-4">

    //          <button onClick={() => console.log("google")} className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 ">
    //            <svg
    //              width="24"
    //              height="24"
    //              viewBox="0 0 24 24"
    //              fill="none"
    //              xmlns="http://www.w3.org/2000/svg"
    //            >
    //              <path
    //                d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
    //                fill="#EA4335"
    //              />
    //              <path
    //                d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
    //                fill="#34A853"
    //              />
    //              <path
    //                d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
    //                fill="#4A90E2"
    //              />
    //              <path
    //                d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
    //                fill="#FBBC05"
    //              />
    //            </svg>
    //            Sign up with Google
    //          </button>
    //          <button onClick={() => console.log("dd")} className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 ">

    //            <img className="w-7" src={githubImg} alt="" />
    //            Sign up with Github
    //          </button>
    //        </div>
    //        <div className="mt-8 flex justify-center items-center">
    //          <p className="font-medium text-base">Already have an account?</p>
    //          <Link to='/login'>
    //          <button
    //            // onClick={() => setAuthState('register')}
    //            className="ml-2 font-medium text-base text-green-500"
    //          >
    //            Login
    //          </button>
    //          </Link>

    //        </div>
    //         </div>

    //       </div>
    //     </div>
    //     </form>

    //   </div>
  );
};

export default Register;

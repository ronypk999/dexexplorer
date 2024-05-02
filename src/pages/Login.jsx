import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginProvider from "../components/loginProvider/LoginProvider";
import PopupProvider from "../components/popupProvider/PopupProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState(false);
  const { emailSignIn, setVerifyEmail, verifyEmail, logout } =
    useContext(AuthContext);
  const locate = useLocation();

  const navigate = useNavigate();
  console.log(locate);
  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailSignIn(email, password)
      .then(() => {
        setLoading(false);
        if (locate.state !== null) {
          navigate(locate.state, { state: "login" });
        } else {
          navigate("/", { state: "login" });
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid Email/Password");
        } else {
          toast.error(error.message);
          console.error(error);
        }

        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-black border-2">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-100">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-neutral text-base-100"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base-100">Password</span>
                </label>
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-neutral text-base-100"
                  required
                />
                <div
                  onClick={() => setEye(!eye)}
                  className="absolute top-[60%] right-2"
                >
                  {eye ? (
                    <IoMdEye className="text-xl"></IoMdEye>
                  ) : (
                    <IoMdEyeOff className="text-xl"></IoMdEyeOff>
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <>
                      Please wait
                      <span className="loading loading-spinner loading-xs"></span>
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>

              <LoginProvider></LoginProvider>
              <PopupProvider></PopupProvider>

              <div className="form-control pt-6">
                <span className="label-text text-white">
                  Don&apos;t have an account?
                  <Link to="/signup" className="link hover:text-red-500">
                    {" "}
                    Click here to Sign Up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-[100] flex items-center justify-center ${
          verifyEmail ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute max-w-md rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            verifyEmail
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          } `}
        >
          <svg
            onClick={() => setVerifyEmail(false)}
            className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
            </g>
          </svg>
          <h1 className="mb-2 text-2xl font-semibold">
            Dex Explore Email Verification!
          </h1>
          <p className="px-1 mb-3 text-sm opacity-80">
            Please check your email inbox for email verification link. Click the
            verification link and verify your email account to continue using
            dexexplore.com
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setVerifyEmail(false)}
              className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white"
            >
              Ok
            </button>
            <button
              onClick={() => {
                setVerifyEmail(false);
                logout();
              }}
              className="rounded-md bg-red-600 hover:bg-red-700 px-6 py-1.5 text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

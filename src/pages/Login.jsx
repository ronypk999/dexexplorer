import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginProvider from "../components/loginProvider/LoginProvider";
import PopupProvider from "../components/popupProvider/PopupProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Verify from "../components/modal/Verify";
import { Helmet } from "react-helmet";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState(false);
  const { emailSignIn } = useContext(AuthContext);
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
      <Helmet>
        <title>Login to Dex Explore account</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white">Login now!</h1>
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
      <Verify></Verify>
    </>
  );
};

export default Login;

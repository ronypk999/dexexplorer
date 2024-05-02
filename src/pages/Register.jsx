import { BsEmojiGrin } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";
const Register = () => {
  const { emailSignUp, verifyEmail, logout, setVerifyEmail } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    if (name.length < 3) {
      toast.error("Name must be more than 3 characters");
      setLoading(false);
      return;
    }

    if (!email.includes("@") || !email.includes(".") || email.length < 7) {
      toast.error("Please provide a valid email");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      toast.error("Password should be at least 8 characters.");
      setLoading(false);
      return;
    }
    if (!/.*[0-9].*/.test(password)) {
      toast.error("Password must contain at least 1 number.");
      setLoading(false);
      return;
    }
    if (!/.*[A-Z].*/.test(password)) {
      toast.error("Password must contain at least 1 Uppercase letter.");
      setLoading(false);
      return;
    }
    if (!/.*[a-z].*/.test(password)) {
      toast.error("Password must contain at least 1 Lowercase letter.");
      setLoading(false);
      return;
    }

    emailSignUp(email, password)
      .then((data) => {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/api.php`,
            JSON.stringify({
              email: email,
              uid: data.user.uid,
            })
          )
          .then(() => {
            updateProfile(data.user, { displayName: name })
              .then(() => {
                e.target.reset();
                setLoading(false);

                navigate("/invite", { state: "signup" });
              })
              .catch(() => {
                toast.error("Something went wrong. Please contact us #ERR500");
              });
          })
          .catch(() =>
            toast.error("Something went wrong. Please contact us #ERR404")
          );
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error("Email already registered");
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
        <title>Sign Up</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-white font-bold flex gap-3">
              Sign Up Folk!{" "}
              <BsEmojiGrin className="text-green-400"></BsEmojiGrin>
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-black border-2">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-100">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered bg-neutral text-base-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-100 ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                    "Sign Up"
                  )}
                </button>
              </div>
              <div className="form-control pt-6">
                <span className="label-text text-base-100">
                  Already have an account?
                  <Link to="/login" className="link hover:text-red-500">
                    {" "}
                    Click here to Sign In
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
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
              Please check your email inbox for email verification link. Click
              the verification link and verify your email account to continue
              using dexexplore.com
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
      </div>
    </>
  );
};

export default Register;

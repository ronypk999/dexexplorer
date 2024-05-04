import { BsEmojiGrin } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import Verify from "../components/modal/Verify";
const Register = () => {
  const { emailSignUp } = useContext(AuthContext);
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
              verified: data.user.emailVerified ? 1 : 0,
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
        <title>Signup for Dex Explore account</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-white font-bold flex gap-3">
              Sign Up!
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
      <Verify></Verify>
    </>
  );
};

export default Register;

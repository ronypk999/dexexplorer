import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { FaXTwitter } from "react-icons/fa6";

const LoginProvider = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new TwitterAuthProvider();

  return (
    <>
      <div className="flex pt-6 flex-col gap-3">
        <button
          className="btn w-full text-white btn-ghost border-2  border-white"
          onClick={() => {
            providerLogin("login", googleProvider);
          }}
          type="button"
        >
          <FaGoogle></FaGoogle>Continue with Google
        </button>
        <button
          className="btn  w-full text-white btn-ghost border-2 border-white"
          onClick={() => {
            providerLogin("login", githubProvider);
          }}
          type="button"
        >
          <FaXTwitter></FaXTwitter> Continue with Twitter
        </button>
      </div>
    </>
  );
};

export default LoginProvider;

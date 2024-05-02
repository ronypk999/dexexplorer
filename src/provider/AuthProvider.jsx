import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  linkWithCredential,
  OAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../config/firebase";

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, SetUser] = useState(null);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [load, setLoad] = useState(true);
  const [loginType, setLoginType] = useState(null);
  const [token, setToken] = useState(null);

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const providerLogin = (type, provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (type === "link") {
          const credential = OAuthProvider.credentialFromError(token);
          linkWithCredential(result.user, credential)
            .then(() => {
              setLoginType(type);
            })
            .catch(() => {
              toast.error("Account linking failed. try again later");
            });
        } else {
          setLoginType(type);
        }
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          setToken(error);
        } else {
          console.error(error);
        }
      });
  };

  const logout = () => {
    return signOut(auth)
      .then(() => {
        localStorage.removeItem("logged");
        navigate("/login");
      })
      .catch();
  };

  useEffect(() => {
    const unsunscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!user.emailVerified) {
          try {
            sendEmailVerification(user);
            setVerifyEmail(true);
          } catch (error) {
            console.log(error);
          } finally {
            SetUser(user);
            setLoad(false);
            localStorage.setItem("logged", "yes");
          }
        } else {
          SetUser(user);
          setLoad(false);
          localStorage.setItem("logged", "yes");
        }
      } else {
        SetUser(null);
        setLoad(false);
      }
    });
    return () => unsunscribe();
  }, [SetUser, setLoad]);
  const values = {
    providerLogin,
    emailSignUp,
    emailSignIn,
    loginType,
    setVerifyEmail,
    verifyEmail,
    load,
    token,
    setToken,
    logout,
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

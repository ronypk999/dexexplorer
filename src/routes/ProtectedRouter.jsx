import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { user, loginType } = useContext(AuthContext);
  const navigate = useNavigate();
  const locate = useLocation();

  if (user && localStorage.getItem("logged")) {
    if (locate.state !== null) {
      navigate(locate.state, { state: loginType });
    } else {
      navigate("/", { state: loginType });
    }
  } else {
    return children;
  }
};

export default ProtectedRouter;

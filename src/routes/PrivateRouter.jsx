import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [go, setGo] = useState(false);

  const navigate = useNavigate();
  const locate = useLocation();

  useEffect(() => {
    if (user === null && !localStorage.getItem("logged")) {
      navigate("/login", { state: locate.pathname });
    } else {
      setGo(true);
    }
  }, [user, navigate, locate, setGo]);

  if (go) {
    return children;
  }
};

export default PrivateRouter;

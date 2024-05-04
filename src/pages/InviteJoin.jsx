import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

const InviteJoin = () => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("refId", params.refId);
    navigate("/");
  }, [params, navigate]);
};

export default InviteJoin;

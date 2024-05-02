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
  return (
    <>
      <Helmet>
        <title>Join #DXE Presale and get big</title>
        <meta
          name="description"
          content="Join #DXE Presale and get big. Join #DXE Presale and get big. Join #DXE Presale and get big.Join #DXE Presale and get big."
        />
      </Helmet>
    </>
  );
};

export default InviteJoin;

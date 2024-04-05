import PropTypes from "prop-types"; // ES6
const TokenCard2 = ({ tokenInfo }) => {
  const { name, description, icon } = tokenInfo;
  return (
    <>
      <div className="card border-2 pt-6 md:pt-0 px-3 md:px-6 lg:items-center lg:card-side bg-black  shadow-xl">
        <figure>
          <div>{icon}</div>
        </figure>

        <div className="card-body flex-1">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

TokenCard2.propTypes = {
  tokenInfo: PropTypes.object,
};

export default TokenCard2;

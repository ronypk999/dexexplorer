import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Verify = () => {
  const {
    verifyEmail,
    changeEmail,
    sendEmailVerify,
    setChangeEmail,
    setVerifyEmail,
    changeEmailRef,
    logout,
  } = useContext(AuthContext);
  return (
    <>
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
            {/* <svg
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
            </svg> */}
            {changeEmail ? (
              <>
                <h1 className="mb-2 text-2xl font-semibold">
                  Change your email
                </h1>
                <p className="px-1 mb-3 text-sm opacity-80">
                  <input
                    type="text"
                    ref={changeEmailRef}
                    placeholder="Type here"
                    className="input input-bordered w-full bg-neutral"
                  />
                </p>
              </>
            ) : (
              <>
                <h1 className="mb-2 text-2xl font-semibold">
                  Dex Explore Email Verification!
                </h1>
                <p className="px-1 mb-3 text-sm opacity-80">
                  Please check your email inbox for email verification link.
                  Click the verification link and verify your email account to
                  continue using dexexplore.com
                </p>
              </>
            )}

            <div className="flex gap-3 justify-center">
              {/* {changeEmail ? (
                <button
                  onClick={() => {
                    sendEmailVerify();
                    setChangeEmail(false);
                  }}
                  className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white"
                >
                  Confirm Email
                </button>
              ) : (
                <button
                  onClick={() => setChangeEmail(true)}
                  className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white"
                >
                  Change Email
                </button>
              )} */}
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

export default Verify;

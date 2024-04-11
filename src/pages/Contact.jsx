import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const sendMail = (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const msg = e.target.msg.value;
    if (name === "" || email === "" || subject === "" || msg === "") {
      toast.error("Fields can't be empty", { theme: "dark" });
      setLoading(false);
      return;
    }
    axios
      .post(
        "https://dexexplore.com/contact.php",
        JSON.stringify({
          name,
          email,
          subject,
          msg,
        })
      )
      .then(() => {
        e.target.reset();
        toast.success(
          "Message sent to the team! We will reply as soon as possible.",
          { theme: "dark" }
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Message is not sent! please contact via email contact@dexexplore.com"
        );
        setLoading(false);
      });
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="w-full bg-gray-800 pb-12">
        <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center text-white">
              Contact Us
            </p>
            <form onSubmit={sendMail}>
              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                  <label className="font-semibold leading-none text-gray-300">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="msg"
                    type="text"
                    className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  className="flex items-center gap-2 mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner text-secondary"></span>
                      <span>Plase wait</span>
                    </>
                  ) : (
                    <>
                      <MdEmail></MdEmail>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import Footer from "./components/footer";

export default function Contact() {
  return (
    <div>
      <div className="mt-10 mb-10 flex justify-center">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h1 className="font-bold text-4xl bg-white text-center">
            Contact Me
          </h1>
          <div className="flex flex-col bg-white gap-8 p-4">
            <div className="flex flex-col">
              <label className="bg-white" htmlFor="name">
                Name
              </label>
              <input
                className="p-2 border-2 rounded-xl bg-white w-96"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="bg-white" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 border-2 rounded-xl bg-white w-96"
                id="email"
                type="text"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="bg-white" htmlFor="text">
                Message
              </label>
              <textarea
                className="p-2 border-2 rounded-xl bg-white w-96 h-40"
                name=""
                id="text"
                placeholder="Your message...."
              ></textarea>
            </div>
            <div>
              <button className="w-96 p-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all ease-out duration-300">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

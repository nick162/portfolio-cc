const Contact = () => {
  return (
    <section
      id="contact"
      className="contact flex flex-col items-center text-center py-16 px-6 md:px-12 lg:px-24"
    >
      <h2 className="text-sm text-gray-600 dark:text-white">Connect with me</h2>
      <h3 className="text-3xl font-semibold mt-2">Get in touch</h3>
      <p className="text-gray-500 max-w-lg mt-3 dark:text-white">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>
      <form className="mt-6 w-full max-w-2xl">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3"
          />
        </div>
        <textarea
          placeholder="Enter your message"
          className="w-full border rounded-lg p-3 mt-4 h-32"
        ></textarea>
        <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">
          Submit now →
        </button>
      </form>
    </section>
  );
};

export default Contact;

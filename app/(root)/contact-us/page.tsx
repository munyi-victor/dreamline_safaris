import Title from "../../../components/Title";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 bg-slate-50 py-16">
      <Title
        title="Contact Us"
        subTitle="Have questions, feedback, or need support? Get in touch with our team—we’re here to help you anytime."
      />

      <div className="max-w-3xl mt-10 text-gray-700 leading-relaxed space-y-4 w-full">
        <p>
          Have questions or need support? Our team is ready to assist you with
          bookings, recommendations, and general inquiries.
        </p>

        <div className="bg-white shadow-sm rounded-xl p-6 border">
          <p>
            <strong>Email:</strong> support@[yourbrand].com
          </p>
          <p>
            <strong>Phone:</strong> +254 XXX XXX XXX
          </p>
          <p>
            <strong>Support Hours:</strong> Mon&ndash;Sat, 8:00 AM &ndash; 6:00
            PM (EAT)
          </p>
          <p>
            <strong>Location:</strong> Nairobi, Kenya
          </p>
        </div>

        {/* contact form */}
        <div className="bg-white shadow-sm border rounded-xl p-6 space-y-4 mt-6">
          <h2 className="text-lg font-semibold">Send Us a Message</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

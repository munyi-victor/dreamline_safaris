import Title from "../../../components/Title";

const HelpCenter = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 bg-slate-50 py-16">
      <Title
        title="Help Centre"
        subTitle="Find quick answers to common questions, step-by-step guides, and support resources to help you use our platform with ease."
      />

      <div className="max-w-3xl mt-10 text-gray-700 leading-relaxed space-y-4">
        <p>
          Welcome to the Help Centre. Here you&apos;ll find useful information
          to guide you through making bookings, managing reservations, and
          understanding payment processes.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>How to book a hotel</li>
          <li>How to cancel or modify a reservation</li>
          <li>Accepted payment methods</li>
          <li>How to contact customer support</li>
          <li>Managing your account details</li>
        </ul>

        <p>
          If your question isn&apos;t answered here, reach out to us anytime at
          <strong> support@[yourbrand].com</strong>.
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;

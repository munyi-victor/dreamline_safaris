import Title from "../../../components/Title";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 bg-slate-50 py-16">
      <Title
        title="Terms & Conditions"
        subTitle="Read the terms that govern your use of our website and services, including booking policies and important user guidelines."
      />

      <div className="max-w-3xl mt-10 text-gray-700 leading-relaxed space-y-4">
        <p>
          By using this platform, you agree to comply with our terms, including
          lawful use of the website and accurate information during bookings.
        </p>

        <p>
          All reservations depend on hotel availability and adherence to
          cancellation and refund policies specified on each listing.
        </p>

        <p>
          We act as a booking facilitator. Accommodation providers are fully
          responsible for the services offered at their properties.
        </p>

        <p>
          Continued use of the platform indicates acceptance of updates to these
          Terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

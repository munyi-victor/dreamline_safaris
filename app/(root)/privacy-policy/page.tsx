import Title from "../../../components/Title";

const Privacy = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 py-24">
      <Title
        title="Privacy Policy"
        subTitle="Learn how we collect, use, and protect your information to ensure your privacy and data security at all times."
      />

      <div className="mt-10 text-gray-700 leading-relaxed space-y-4">
        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          handle your information when you use our platform.
        </p>

        <p>
          We collect personal details such as your name, contact information,
          booking preferences, and device data to improve your experience and
          support secure transactions.
        </p>

        <p>
          Your information is stored securely and used only for booking
          processing, account management, customer support, and platform
          improvements. We never sell personal data to third parties.
        </p>

        <p>
          You may request updates or deletion of your information at any time.
        </p>
      </div>
    </div>
  );
};

export default Privacy;

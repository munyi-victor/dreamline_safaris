import Title from "../../../components/Title";

const About = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 py-24">
      <Title
        title="About Us"
        subTitle="Discover who we are, what we do, and the passion behind our mission to make hotel booking simple, secure, and stress-free for every traveler."
      />

      <div className="mt-10 text-gray-700 leading-relaxed space-y-4">
        <p>
          Welcome to <strong>Dreamline Safaris</strong>, Kenya&apos;s trusted
          platform for discovering, comparing, and booking hotels, lodges, and
          unique stays. We simplify travel by connecting you with verified
          accommodations that match your needs, preferences, and budget.
        </p>

        <p>
          Our mission is to make travel planning transparent, reliable, and
          enjoyable. Through a mix of local expertise and modern technology, we
          ensure that you book with confidence.
        </p>

        <p>
          Whether you're seeking a peaceful escape, a business-friendly stay, or
          a luxurious experience, we help you find the perfect accommodation
          quickly and securely.
        </p>

        <p>
          Thank you for trusting us to be part of your travel journey across
          Kenya and beyond.
        </p>
      </div>
    </div>
  );
};

export default About;

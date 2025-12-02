import Title from "../../../components/Title";

const Blog = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 py-24">
      <Title
        title="Blog"
        subTitle="Explore travel guides, hotel reviews, destination tips, and expert insights to help you plan smarter and travel better."
      />

      <div className="mt-10 text-gray-700 leading-relaxed space-y-4">
        <p>
          Discover curated travel stories, destination highlights, and practical
          tips designed to help you explore Kenya with confidence and
          excitement.
        </p>

        <p>
          Whether you&apos;re looking for budget travel ideas, luxury
          experiences, or hidden gems across the country, our blog brings you
          fresh insights to make every trip memorable.
        </p>

        <p>
          Stay tuned for weekly articles, travel inspiration, and helpful
          recommendations.
        </p>
      </div>
    </div>
  );
};

export default Blog;

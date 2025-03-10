import Testimony from "../components/TestimonyCard";

export default function ReviewCarousel() {
  return (
    <div
      id="review"
      className="review relative max-w-4xl mx-auto text-center px-4 mt-16"
    >
      <h3 className="text-2xl font-bold mb-4">
        Review Services <br />
        Make yourself comfortable with your advice for US
      </h3>
      <p className="md:text-gray-600 dark:text-white mb-6 text-white">
        Some of the most successful people in the world have many friends, and
        having them is the biggest influence on one's growth.
      </p>
      <div>
        <Testimony />
      </div>
    </div>
  );
}

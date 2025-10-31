import { StarIcon } from "lucide-react";
import { testimonials } from "../constants";

const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <StarIcon
            key={index}
            size={15}
            color="#F28C28"
            fill={`${rating > index ? "#F28C28" : "#fff"}`}
          />
        ))}
    </div>
  );
};

export default StarRating;

import React from "react";
import Title from "../Title";
import { testimonials } from "../../constants";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import StarRating from "../StarRating";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-16 pt-20 pb-30">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travellers choose Dreamline Safaris for their luxury accommodations around the world."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow maz-w-xs"
          >
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="size-12 rounded-full"
              />

              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>

            <StarRating rating={testimonial.rating} />
            <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

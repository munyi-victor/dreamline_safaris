"use client";

import { roomsData } from "../../constants";
import FeaturedHotelCard from "../FeaturedHotelCard";
import Title from "../Title";
import Link from "next/link";

interface RoomProps {
  _id: string;
  hotel: {
    _id: string;
    name: string;
    address: string;
    contact: string;
    city: string;
  };
  roomType: string;
  pricePerNight: string;
  ammenities: string[];
  images: [];
  isAvailable: boolean;
}

const FeaturedHotels = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 bg-slate-50 py-16">
      <Title
        title="Featured Hotels"
        subTitle="Discover our best rated hotels with best offers and unlimited ammenities."
      />
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {roomsData.slice(0, 4).map((room) => (
          <FeaturedHotelCard key={room._id} room={room} />
        ))}
      </div>

      <Link
        href="/rooms"
        className="flex items-center justify-center rounded py-2 mt-10 w-full md:w-1/4 lg:w-1/2 bg-safari-orange hover:bg-safari-orange/80 transition-all text-white"
      >
        View All Hotels
      </Link>
    </div>
  );
};

export default FeaturedHotels;

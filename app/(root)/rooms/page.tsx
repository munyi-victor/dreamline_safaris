"use client";

import Title from "../../components/Title";
import Image from "next/image";
import { hotels } from "../../constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StarRating from "../../components/StarRating";

const Rooms = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col px-6 md:px-16 lg:px-24 py-20">
      <Title
        title="All Hotels"
        subTitle="Discover our amazing luxury hotels all over Kenya."
      />

      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-12 justify-between mt-12">
        <div className="w-full">
          {hotels.map((hotel) => (
            <div
              key={hotel._id}
              className="flex flex-col md:flex-row gap-2 md:gap-6 py-6 border-b border-b-gray-300 "
            >
              <div
                onClick={() => {
                  router.push(`rooms/${hotel._id}`);
                  scrollTo(0, 0);
                }}
                className="relative max-w-96 w-full rounded-xs overflow-hidden cursor-pointer"
              >
                <Image
                  src={hotel.images[1]}
                  alt={hotel.name}
                  width={1000}
                  height={1000}
                  priority
                  className="cover"
                />
              </div>

              <div className="flex flex-col gap-0 md:gap-2">
                <h3 className="text-gray-500">{hotel.city}</h3>
                <h1
                  onClick={() => {
                    router.push(`rooms/${hotel._id}`);
                    scrollTo(0, 0);
                  }}
                  className="text-2xl md:text-3xl text-gray-800 font-semibold cursor-pointer"
                >
                  {hotel.name}
                </h1>

                <div className="flex items-center">
                  <StarRating />
                  <p className="ml-2 text-gray-500">80+ reviews</p>
                </div>

                <div className="flex gap-2 mt-4">
                  {hotel.ammenities.map((item, index) => (
                    <p
                      key={index}
                      className="bg-gray-600 text-xs text-white py-1 px-2 rounded"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fillters sections */}
        <div className="border border-gray-300 rounded-xs w-full md:w-1/4 h-full items-start">
          <div className="border-b border-gray-300 flex flex-row justify-between px-2 py-1">
            <h1 className="text-gray-800">FILTERS</h1>

            <p className="hidden md:block text-gray-800">CLEAR</p>
            <p className="block md:hidden text-gray-800">SHOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

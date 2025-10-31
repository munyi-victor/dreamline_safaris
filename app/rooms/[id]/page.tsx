"use client";

import { useEffect, useState } from "react";
import { hotels } from "../../../constants";
import { useParams } from "next/navigation";
import Title from "../../../components/Title";
import Image, { StaticImageData } from "next/image";
import Loader from "../../../components/Loader";
import { Calendar, MapPin, User } from "lucide-react";
import StarRating from "../../../components/StarRating";
import CustomButton from "../../../components/CustomButton";

interface HotelProps {
  _id: string;
  name: string;
  address: string;
  contact: string;
  city: string;
  pricePerNight: string;
  ammenities: string[];
  images: StaticImageData[];
}

const RoomDetails = () => {
  const { id } = useParams();

  const [hotel, setHotel] = useState<HotelProps>(null);
  const [mainImage, setMainImage] = useState<StaticImageData>();

  useEffect(() => {
    const fetchHotelDetails = () => {
      const hotelData = hotels.find((hotel) => hotel._id == id);

      hotelData && setHotel(hotelData);
      hotelData && setMainImage(hotelData.images[0]);
    };

    fetchHotelDetails();
  }, []);

  if (!hotel) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col px-6 md:px-16 lg:px-24 py-20">
      <Title title={hotel.name} subTitle="" align="left" />

      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <StarRating />
          <p className="ml-2 text-gray-500">80+ reviews</p>
        </div>
        <div className="flex gap-1 items-center text-gray-500">
          <MapPin size={15} />
          <p>
            {hotel.address}, {hotel.city}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="lg:w-1/2 w-full">
            <Image
              src={mainImage}
              alt={hotel.name}
              className="w-full rounded-xl shadow-lg cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {hotel?.images.map((hotelImg, index) => (
              <Image
                key={index}
                src={hotelImg}
                alt="hotel image"
                priority
                className={`cover rounded-xl w-full shadow-md ${
                  mainImage === hotelImg && "outline outline-safari-orange"
                }`}
                onClick={() => {
                  setMainImage(hotelImg);
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl text-gray-800 font-medium">
              Experience Luxury Like Never Before!
            </h1>

            <p className="text-2xl md:text-3xl font-medium">
              Ksh{hotel.pricePerNight} /night
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            {hotel.ammenities.map((item, index) => (
              <p
                key={index}
                className="bg-gray-600 text-xs md:text-sm text-white py-1 px-2 rounded"
              >
                {item}
              </p>
            ))}
          </div>

          <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex justify-between max-md:items-start gap-4 max-md:mx-auto shadow-md">
            <div className="flex flex-row gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <Calendar size={15} />
                  <label htmlFor="checkIn">Check in</label>
                </div>
                <input
                  type="date"
                  id="checkIn"
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  placeholder="Check In"
                  required
                />
              </div>
              <div className="h-full bg-gray-300 w-0.5"></div>
              <div>
                <div className="flex items-center gap-2">
                  <Calendar size={15} />
                  <label htmlFor="checkOut">Check out</label>
                </div>
                <input
                  type="date"
                  id="checkOut"
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  placeholder="Check Out"
                  required
                />
              </div>
              <div className="h-full bg-gray-300 w-0.5"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={15} />
                  <label htmlFor="guests">Guests</label>
                </div>
                <input
                  type="number"
                  id="guests"
                  min={1}
                  max={4}
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                  placeholder="1"
                  required
                />
              </div>
            </div>

            <CustomButton title="Check Availability" theme="primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

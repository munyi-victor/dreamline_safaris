import { MapPin, StarIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
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
  images: StaticImageData[];
  isAvailable: boolean;
}

interface FeaturedHotelCardProps {
  room: RoomProps;
}

const FeaturedHotelCard = ({ room }: FeaturedHotelCardProps) => {
  return (
    <Link
      href={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
    >
      <Image
        src={room.images[0]}
        alt="room image"
        width={1000}
        height={1000}
        priority
        className="cover"
      />

      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="text-lg md:text-xl text-gray-800 font-medium">
            {room.hotel.name}
          </p>

          <div className="flex items-center gap-1">
            <StarIcon size={15} color="#F28C28" fill="#F28C28" /> 4.5
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <MapPin size={15} />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-lg md:text-xl text-gray-800">
              ${room.pricePerNight}
            </span>{" "}
            /night
          </p>
          <button className="px-2 py-1 md:px-4 md:py-2 text-sm @max-xs:text-xs font-medium border border-gray-300 rounded  hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedHotelCard;

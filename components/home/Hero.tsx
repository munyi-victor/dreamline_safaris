"use client";

import { Calendar, MapPin, Search, User } from "lucide-react";

const Hero = () => {
  const cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];

  return (
    <section className='bg-[url("/images/hero.png")] bg-cover bg-center bg-no-repeat h-full md:h-screen flex flex-col items-start justify-center py-8 md:py-0 px-6 md:px-16 lg:px-24 xl:px-32 text-white'>
      <p className="bg-safari-orange text-sm py-1 px-3 rounded-full mt-20">
        The Ultimate Hotel Experience
      </p>
      <h1 className="text-3xl md:text-5xl md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Discover Your Perfect Gateway Destination.
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Unparalled luxury and comfort await at Kenya&apos;s most exclusive
        hotels and lodges. Start your journey today.
      </p>

      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            type="text"
            list="destinations"
            id="destinationInput"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Destination"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

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

        <button className="flex items-center justify-center gap-1 rounded-md  py-3 px-4 bg-black text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <Search size={18} />
          <span>Search</span>
        </button>
      </form>
    </section>
  );
};

export default Hero;

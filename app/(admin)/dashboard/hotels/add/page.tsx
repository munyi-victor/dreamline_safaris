"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const AddHotel = () => {
  const router = useRouter();

  return (
    <div className="h-full p-2 md:p-4">
      <div className="flex gap-2 items-center mb-4">
        <button
          onClick={() => {
            router.back();
          }}
          className="text-gray-200 bg-slate-600 py-1 px-3 rounded-md hover:bg-slate-500 cursor-pointer"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-xl font-semibold text-gray-200">Add New Hotel</h2>
      </div>
      <form className="space-y-4">
        {/* hotel name */}
        <div>
          <label className="text-gray-200 text-sm">Hotel Name</label>
          <input
            type="text"
            className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
            placeholder="e.g. Ocean Breeze Hotel"
          />
        </div>

        {/* location */}
        <div>
          <label className="text-gray-200 text-sm">Location</label>
          <input
            type="text"
            className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
            placeholder="e.g. Diani Beach, Kenya"
          />
        </div>

        {/* price per night */}
        <div>
          <label className="text-gray-200 text-sm">Price Per Night($)</label>
          <input
            type="number"
            className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
            placeholder="e.g. 200"
          />
        </div>

        {/* amenities */}
        <div>
          <label className="text-gray-200 text-sm">
            Amenities (comma separated)
          </label>
          <input
            type="text"
            className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
            placeholder="e.g. WiFi, Swimming Pool, Parking"
          />
        </div>

        {/* description */}
        <div>
          <label className="text-gray-200 text-sm">Description</label>
          <textarea
            rows={4}
            className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
            placeholder="Write a short description of the hotel..."
          ></textarea>
        </div>

        {/* image upload */}
        <div>
          <label className="text-gray-200 text-sm">Upload Images</label>
          <input type="file" multiple className="w-full mt-1 text-gray-200" />
        </div>

        {/* actions */}
        <button
          type="submit"
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Hotel
        </button>
      </form>
    </div>
  );
};

export default AddHotel;

"use client";

import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { bookings } from "../../../../constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Bookings = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const router = useRouter();

  const statusColors: Record<string, string> = {
    Paid: "bg-green-600 text-white",
    Pending: "bg-yellow-500 text-white",
    Cancelled: "bg-red-600 text-white",
  };

  const filterOptions = ["Latest", "A-Z", "Z-A"];

  const showFilters = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  return (
    <div className="h-full p-2 md:p-4">
      <div className="flex gap-2 items-center mb-4">
        <button
          onClick={() => {
            router.push("/dashboard");
          }}
          className="text-gray-200 bg-slate-600 py-1 px-3 rounded-md hover:bg-slate-500 cursor-pointer"
        >
          <ArrowLeft />
        </button>

        <h1 className="text-xl font-semibold">All Bookings</h1>
      </div>

      <div className="mb-3 flex items-center justify-between">
        {/* filters */}
        <div className="bg-slate-500 p-1 flex items-center gap-3 rounded relative">
          <button
            onClick={showFilters}
            className="flex gap-1 items-center cursor-pointer p-1 rounded hover:bg-slate-600"
          >
            <span>Filters</span>
            <ChevronDown />
          </button>

          {/* filter options */}

          {showFilterOptions && (
            <div className="z-10 shadow-lg rounded-sm bg-slate-700 absolute left-0 top-10 w-full">
              {filterOptions.map((opt, i) => (
                <p
                  key={i}
                  onClick={() => {
                    setShowFilterOptions(false);
                  }}
                  className="hover:bg-slate-600 py-1 px-3 cursor-pointer"
                >
                  {opt}
                </p>
              ))}
            </div>
          )}

          {/* <div className="flex gap-1 items-center cursor-pointer p-1 rounded hover:bg-slate-600">
            <span>Sort</span>
            <ChevronDown />
          </div> */}
        </div>

        {/* search bar */}
        <div>
          <form className="flex items-center gap-1 bg-slate-500 p-2 rounded">
            <input
              type="search"
              placeholder="Search name, hotel..."
              required
              className="rounded bg-slate-700 py-2 px-3 focus:border-0 focus:outline-0"
            />
            <button
              type="submit"
              className="bg-transparent text-gray-200 font-extrabold cursor-pointer"
            >
              <Search size={28} />
            </button>
          </form>
        </div>
      </div>

      {/* bookings table */}
      <div className="overflow-auto">
        <table className="min-w-full border-collapse text-sm text-white">
          <thead>
            <tr className="bg-slate-600 text-left *:p-3 *:font-medium">
              <th>Booking ID</th>
              <th>Guest</th>
              <th>Hotel</th>
              <th>Room Type</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Amount ($)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.bookingID}
                className="border-b border-slate-500 hover:bg-slate-600 transition *:p-3"
              >
                <td>{booking.bookingID}</td>
                <td>{booking.guest}</td>
                <td>{booking.hotel}</td>
                <td>{booking.roomType}</td>
                <td>{booking.checkIn}</td>
                <td>{booking.checkOut}</td>
                <td>{booking.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      statusColors[booking.status]
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>

                <td className="space-x-2 *:hover:underline">
                  <button className="text-blue-400">View</button>
                  {booking.status === "Pending" && (
                    <button className="text-green-400">Confirm</button>
                  )}
                  {booking.status === "Paid" && (
                    <button className="text-red-400">Refund</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="flex justify-end space-x-1 mt-2 *:px-3 *:py-1 *:bg-slate-500 *:hover:bg-slate-600 *:text-gray-200 *:rounded">
        <button>
          <ChevronLeft />
        </button>
        <button>1</button>
        <button>2</button>
        <button>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Bookings;

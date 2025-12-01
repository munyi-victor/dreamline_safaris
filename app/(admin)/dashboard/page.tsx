"use client";

import { ArrowRight } from "lucide-react";
import TotalsCard from "../../../components/admin/TotalsCard";
import { bookings } from "../../../constants";
import Link from "next/link";

const Dashboard = () => {
  const statusColors: Record<string, string> = {
    Paid: "bg-green-600 text-white",
    Pending: "bg-yellow-500 text-white",
    Cancelled: "bg-red-600 text-white",
  };

  return (
    <div className="py-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>

        <div className="hidden md:flex gap-1 *:py-2 *:px-3 *:text-xs *:rounded-md *:bg-slate-800 *:cursor-pointer">
          <Link href="/dashboard/hotels/add">+ Add Hotel</Link>
          <Link href="/dashboard/rooms/add">+ Add Room</Link>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <TotalsCard title="Total Hotels" value={8} />
        <TotalsCard title="Total Bookings" value={23} />
        <TotalsCard title="Today's Bookings" value={8} />
        <TotalsCard title="Total Revenue" value={1200} type="currency" />
        <TotalsCard title="This Month Revenue" value={320} type="currency" />
      </div>

      {/* CHARTS */}
      <div></div>

      {/* TABLES */}
      <div className="mt-6 w-full bg-slate-500 rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Recent Bookings</h1>

          <div className="hidden md:block hover:text-white">
            <Link
              href="/dashboard/bookings"
              className="flex gap-1 items-center cursor-pointer"
            >
              View all bookings <ArrowRight size={20} />
            </Link>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Dashboard;

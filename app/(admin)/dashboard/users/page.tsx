"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Users = () => {
  const router = useRouter();

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
        <h2 className="text-xl font-semibold text-gray-200">Users</h2>
      </div>
    </div>
  );
};

export default Users;

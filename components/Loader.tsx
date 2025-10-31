import { LoaderIcon } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-1 h-screen items-center justify-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="flex flex-col gap-3 items-center text-lg">
        <LoaderIcon size={24} className="text-gray-800 animate-spin" />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;

"use client";

import Link from "next/link";
import CustomButton from "../CustomButton";
import Title from "../Title";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
      <Title
        title="Stay Inspired"
        subTitle="Subscribe to our newsletter today to get updates on new destinations and offers. Always be ahead!"
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <input
          type="text"
          className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
          placeholder="Enter your email"
        />

        <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
          Subscribe
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-all4"
          />
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-300">
        By subscribing you agree to our{" "}
        <Link href="#" className="text-blue-500">
          privacy policy
        </Link>{" "}
        and consent to receiving email updates.
      </p>
    </div>
  );
};

export default Newsletter;

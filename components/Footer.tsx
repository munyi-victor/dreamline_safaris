import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-50 text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold hover:translate-0.5 transition-all mb-4"
          >
            Dreamline
          </Link>
          <p className="text-sm">
            Unparalled luxury and comfort await at Kenya's most exclusive hotels
            and lodges. Start your journey today.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <Link href="#" className="w-6">
              <InstagramIcon />
            </Link>
            <Link href="#" className="w-6">
              <FacebookIcon />
            </Link>
            <Link href="#" className="w-6">
              <TwitterIcon />
            </Link>
            <Link href="#" className="w-6">
              <LinkedinIcon />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Partners</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link href="#">Help Center</Link>
            </li>
            <li>
              <Link href="#">Safety Information</Link>
            </li>
            <li>
              <Link href="#">Cancellation Options</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>

          <div className="flex items-center mt-4">
            <input
              type="text"
              className="bg-white rounded-1 border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />

            <button className="flex items-center justify-center bg-black size-9 aspect-square rounded-r cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-8" />

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>&copy; {new Date().getFullYear()} Dreamline. All Rights Reserved.</p>

        <ul className="flex items-center gap-4">
          <li>
            <Link href="#">Privacy</Link>
          </li>
          <li>
            <Link href="#">Terms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

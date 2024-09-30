"use client";

import Image from "next/image";
import AICV from "@/images/ai-cv-dash.png";
import AICV2 from "@/images/ai-cv2.png";
import DEMO from "@/images/demo.png";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(243_243_243)] h-[100vh] w-full overflow-auto">
        <section className="px-14">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2 ps-7 py-3 text-[#005dff] font-bold text-2xl">
              <Image src={AICV} height={65} width={65} alt="" />

              <span className="">AI CV</span>
            </div>

            <div className="flex">
              <ul className="flex gap-3 font-semibold">
                <li>Home</li>
                <li>About us</li>
                <li>Features</li>
                <li>Testimonials</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>

            <Link
              href="/sign-in"
              className="bg-[linear-gradient(102deg,_#0075FF_0%,_#0135FF_100%)] text-white text-xl px-8 py-3 rounded-2xl font-light"
            >
              Login/Signup
            </Link>
          </nav>

          <div className="mt-48 text-7xl text-center font-semibold">
            <span className="">
              Made for <span className="text-[#015AFF]">creative</span>. Built
              for
            </span>
            <div className="">enterprise</div>
          </div>

          <div className="text-gray-700 text-center mt-4">
            Give your team a secure, scalable collaboration platform to manage
            creative assets, centralize feedback, and deliver faster.
          </div>

          <div className="flex w-full justify-center mt-7">
            <input
              type="text"
              className="border-0 px-3 py-5 w-[80%] rounded-xl"
              placeholder="From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique."
            />
          </div>

          <button className="bg-[linear-gradient(102deg,_#0075FF_0%,_#0135FF_100%)] text-white text-xl px-16 py-5 rounded-2xl font-light flex mx-auto mt-7 mb-28">
            Get Started
          </button>

          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-4xl">Features</span>
            <span>
              AI Powered CV Matching Advanced Search Filters secure and Private
              Searches Instant results.
            </span>
          </div>

          <button className="bg-[linear-gradient(102deg,_#0075FF_0%,_#0135FF_100%)] text-white text-xl px-12 py-4 rounded-2xl font-light flex mx-auto mt-7 mb-28">
            Search CV
          </button>
        </section>

        <section className="bg-[#E9EFF3] px-36 py-16 overflow-auto">
          <div className="mt-48 text-5xl text-center font-semibold">
            <span className="">
              How <span className="text-[#015AFF]">AI CV</span> Works in 4
              Simple Steps
            </span>
          </div>

          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-end items-center w-full">
                <div className="border-8 border-[#E5E5E5] bg-[#015AFF] rounded-full h-16 w-16 text-white flex justify-center items-center font-semibold text-2xl">
                  1
                </div>

                <hr className="border-t border-gray-300 min-w-24 w-[39%]" />
              </div>

              <h2 className="font-semibold text-2xl flex flex-col justify-center items-center">
                <span>Enter Job</span>
                <span>Description</span>
              </h2>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus id minima vel sit, nisi iure laborum ullam iusto
                exercitationem quidem natus fugiat eveniet suscipit culpa earum
                cumque, officia ipsa tenetur.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center w-full">
                <hr className="border-t border-gray-300 min-w-24 w-[39%]" />
                <div className="border-8 border-[#E5E5E5] bg-[#015AFF] rounded-full h-16 w-16 text-white flex justify-center items-center font-semibold text-2xl">
                  1
                </div>

                <hr className="border-t border-gray-300 min-w-24 w-[39%]" />
              </div>

              <h2 className="font-semibold text-2xl flex flex-col justify-center items-center">
                <span>Enter Job</span>
                <span>Description</span>
              </h2>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus id minima vel sit, nisi iure laborum ullam iusto
                exercitationem quidem natus fugiat eveniet suscipit culpa earum
                cumque, officia ipsa tenetur.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center w-full">
                <hr className="border-t border-gray-300 min-w-24 w-[39%]" />
                <div className="border-8 border-[#E5E5E5] bg-[#015AFF] rounded-full h-16 w-16 text-white flex justify-center items-center font-semibold text-2xl">
                  1
                </div>

                <hr className="border-t border-gray-300 min-w-24 w-[39%]" />
              </div>

              <h2 className="font-semibold text-2xl flex flex-col justify-center items-center">
                <span>Enter Job</span>
                <span>Description</span>
              </h2>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus id minima vel sit, nisi iure laborum ullam iusto
                exercitationem quidem natus fugiat eveniet suscipit culpa earum
                cumque, officia ipsa tenetur.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center w-full">
                <hr className="border-t border-gray-300 min-w-24 w-[39%]" />
                <div className="border-8 border-[#E5E5E5] bg-[#015AFF] rounded-full h-16 w-16 text-white flex justify-center items-center font-semibold text-2xl">
                  1
                </div>
              </div>

              <h2 className="font-semibold text-2xl flex flex-col justify-center items-center">
                <span>Enter Job</span>
                <span>Description</span>
              </h2>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus id minima vel sit, nisi iure laborum ullam iusto
                exercitationem quidem natus fugiat eveniet suscipit culpa earum
                cumque, officia ipsa tenetur.
              </span>
            </div>
          </div>
        </section>

        <section className="py-24 px-40 bg-[rgb(243_243_243)]">
          <h1 className="flex flex-col text-4xl font-bold">
            What our clients think
            <span>
              <span className="text-[#015AFF] italic font-thin">about</span> AI
              CV
            </span>
          </h1>

          <div className="rounded-2xl bg-white ps-10 py-14 mt-8">
            <div className="max-w-[60%] text-xl">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, id! Fugit perferendis, mollitia, aperiam officiis
              deserunt, odio perspiciatis voluptatem blanditiis ducimus labore
              animi. Eaque, tempora!"
            </div>

            <h2 className="text-lg font-extrabold mt-16">John Doe</h2>

            <div className="font-semibold text-md">Product Marketer, Lorem</div>

            <div className="flex mt-6 justify-between items-center gap-4">
              <div className="font-extrabold text-4xl">Logo</div>

              <div className="bg-[#015AFF] h-2 w-full"></div>
            </div>
          </div>
        </section>

        <section className="bg-[hsl(223.78deg_64.91%_11.18%)] ps-24 pr-14 text-white py-16">
          <div className="flex flex-wrap justify-between w-full border-b border-gray-700 pb-16">
            <ul className="w-[22%]">
              <li className="font-bold">Product</li>
              <li className="text-sm text-gray-400 py-2">Employee database</li>
              <li className="text-sm text-gray-400 py-2">Payroll</li>
              <li className="text-sm text-gray-400 py-2">Absences</li>
              <li className="text-sm text-gray-400 py-2">Time tracking</li>
              <li className="text-sm text-gray-400 py-2">Shift planner</li>
              <li className="text-sm text-gray-400 py-2">Recruiting</li>
            </ul>
            <ul className="w-[22%]">
              <li className="font-bold">Information</li>
              <li className="text-sm text-gray-400 py-2">FAQ</li>
              <li className="text-sm text-gray-400 py-2">Blog</li>
              <li className="text-sm text-gray-400 py-2">Support</li>
            </ul>
            <ul className="w-[22%]">
              <li className="font-bold">Company</li>
              <li className="text-sm text-gray-400 py-2">About us</li>
              <li className="text-sm text-gray-400 py-2">Careers</li>
              <li className="text-sm text-gray-400 py-2">Contact us</li>
            </ul>
            <div className="bg-[hsl(223.64deg_32.04%_20.2%)] p-12 w-[30%]">
              <h2 className="font-bold mb-4">Subscribe</h2>

              <div className="flex">
                <input
                  type="text"
                  className="bg-white rounded-s h-12 ps-4"
                  placeholder="Email Address"
                />
                <button className="bg-[#015AFF] rounded-e p-4 h-12 flex justify-center items-center">
                  <FaArrowRightLong />
                </button>
              </div>

              <div className="mt-5 text-gray-400">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud"
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 ps-7 py-3 text-white font-bold text-sm md:text-2xl">
              <Image
                src={AICV2}
                height={20}
                width={20}
                alt=""
                className="h-8 w-8 md:h-14 md:w-14"
              />

              <span className="">AI CV</span>
            </div>

            <div className="flex gap-4">
              <span className="">Terms</span>
              <span className="">Privacy</span>
              <span className="">Cookies</span>
            </div>

            <div className="flex gap-4">
              <span className="border border-gray-500 p-2 rounded-full">
                <FaLinkedinIn />
              </span>
              <span className="border border-gray-500 p-2 rounded-full">
                <FaFacebookF />
              </span>
              <span className="border border-gray-500 p-2 rounded-full">
                <FaTwitter />
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

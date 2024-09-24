"use client";

import Image from "next/image";
import AICV from "@/images/ai-cv1.png";

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

            <button className="bg-[linear-gradient(102deg,_#0075FF_0%,_#0135FF_100%)] text-white text-xl px-8 py-3 rounded-2xl font-light">
              Login/Signup
            </button>
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
      </div>
    </>
  );
}

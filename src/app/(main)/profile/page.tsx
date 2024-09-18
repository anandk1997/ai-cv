"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducer } from "react";
import { PiPencilSimpleLineThin } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";

const Profile = () => {
  const [isEdit1, setIsEdit1] = useReducer((prev) => !prev, false);
  const [isEdit2, setIsEdit2] = useReducer((prev) => !prev, false);
  const [isEdit3, setIsEdit3] = useReducer((prev) => !prev, false);

  return (
    <div className="bg-white h-full overflow-auto mt-4 p-12 rounded-3xl">
      <h1 className="font-semibold">Photo Profile</h1>

      <section className="flex justify-between mt-3 mb-5">
        <div className="flex align-middle items-center gap-6">
          <Image
            src="https://picsum.photos/id/237/200/300"
            height={10}
            width={10}
            alt=""
            className="h-16 w-16 rounded-full"
          />

          <label
            htmlFor="file"
            className="cursor-pointer text-[#3B6BF6] font-semibold border border-[#3B6BF6] h-12 px-6 rounded-lg flex justify-center align-middle items-center"
          >
            <input type="file" className="hidden" name="" id="file" />
            Upload New Picture
          </label>

          <button className="bg-[#F8F8F8] h-12 px-6 font-semibold text-gray-700 rounded-lg">
            Delete
          </button>
        </div>

        <Link
          href=""
          className="bg-[linear-gradient(97deg,_#0075FF_0%,_#0135FF_100%)] flex justify-center items-center px-6 h-12 rounded-lg text-white text-sm"
        >
          Change Password
        </Link>
      </section>

      <section className="mt-8">
        <div className="flex justify-between">
          <h1 className="font-semibold">Personal Information</h1>

          <button
            className="text-gray-600 text-sm border border-gray-300 rounded-sm px-3 h-8 flex justify-center items-center gap-2"
            onClick={setIsEdit1}
          >
            {isEdit1 ? (
              "Save"
            ) : (
              <>
                <PiPencilSimpleLineThin />

                <span>Edit</span>
              </>
            )}
          </button>
        </div>

        <div className="flex justify-between gap-3 mt-3">
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="" className="text-gray-500 text-sm">
              First Name
            </label>

            <input
              disabled={!isEdit1}
              className="h-12 border border-gray-400 rounded-md w-full px-4"
            />
          </div>

          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="" className="text-gray-500 text-sm">
              Last Name
            </label>

            <input
              disabled={!isEdit1}
              className="h-12 border border-gray-400 rounded-md w-full px-4"
            />
          </div>
        </div>

        <div className="flex justify-between gap-3 mt-3">
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="" className="text-gray-500 text-sm">
              Gender
            </label>

            <select
              name="gender"
              disabled={!isEdit1}
              className="h-12 border border-gray-400 rounded-md w-full px-4"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="" className="text-gray-500 text-sm">
              Date of birth
            </label>

            <input
              type="date"
              disabled={!isEdit1}
              className="h-12 border border-gray-400 rounded-md w-full px-4"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-between">
          <h1 className="font-semibold">Contact Personal</h1>

          <button
            className="text-gray-600 text-sm border border-gray-300 rounded-sm px-3 h-8 flex justify-center items-center gap-2"
            onClick={setIsEdit2}
          >
            {isEdit2 ? (
              "Save"
            ) : (
              <>
                <PiPencilSimpleLineThin />

                <span>Edit</span>
              </>
            )}
          </button>
        </div>

        <div className="flex justify-between gap-3 mt-3">
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="" className="text-gray-500 text-sm">
              Phone number
            </label>

            <input
              type="number"
              disabled={!isEdit2}
              className="h-12 border border-gray-400 rounded-md w-full px-4"
            />
          </div>

          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="" className="text-gray-500 text-sm">
              Email
            </label>

            <input
              disabled={!isEdit2}
              className="h-12 border border-gray-400 rounded-md w-full px-4"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-between">
          <h1 className="font-semibold">General</h1>

          <button
            className="text-gray-600 text-sm border border-gray-300 rounded-sm px-3 h-8 flex justify-center items-center gap-2"
            onClick={setIsEdit3}
          >
            {isEdit3 ? (
              "Save"
            ) : (
              <>
                <PiPencilSimpleLineThin />

                <span>Edit</span>
              </>
            )}
          </button>
        </div>

        <div className="flex justify-between gap-3 mt-3">
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="" className="text-gray-500 text-sm">
              Language
            </label>

            <select
              name="language"
              disabled={!isEdit3}
              className="h-12 border border-gray-400 rounded-md w-[49%] px-4"
            >
              <option value="male">English</option>
              <option value="female">Hindi</option>
            </select>
          </div>
        </div>
      </section>

      <button className="bg-[#FF342D] flex justify-center gap-2 items-center px-6 h-12 rounded-md text-white text-sm mt-14">
        <span>Delete Account</span>

        <SlArrowRight />
      </button>
    </div>
  );
};

export default Profile;

import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { TbChecklist } from "react-icons/tb";

const CvDetails = () => {
  return (
    <div className="h-[calc(100%_-_9px)] overflow-auto ">
      <div className="flex gap-2 my-5">
        <input
          type="search"
          placeholder="Search CV..."
          className="px-4 pb-16 pt-5 rounded-xl w-[70%]"
        />

        <button className="bg-[linear-gradient(180deg,_#0075FF_0%,_#0135FF_100%)] text-white px-10 py-2 rounded-lg text-sm h-12">
          Search
        </button>
      </div>

      <h1 className="pb-7 text-2xl font-semibold">CV's based on search</h1>

      <div className="bg-white rounded-3xl w-full pt-5 px-2 pb-2 mt-3">
        <div className="ps-3">
          <h2 className="text-xl font-semibold">John Doe</h2>

          <span className="text-gray-400">UI UX Developer</span>

          <div className="flex items-center gap-2 py-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="text-gray-400 text-xs">
              Last Active: 3 hours ago
            </span>
          </div>

          <section>
            <div className="flex items-center gap-2 ">
              <IoMdMail className="text-[#005dff]" />
              <span>username@example.com</span>
            </div>

            <div className="flex items-center gap-2 pb-2">
              <FiPhoneCall className="text-[#005dff]" />
              <span>+1 982 839 3872</span>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2">
              <span className="h-4 w-7 rounded-full bg-blue-500" />
              <span className="font-semibold">About</span>
            </div>

            <span className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              provident dicta blanditiis, quisquam perferendis ipsa.
            </span>
          </section>

          <section className="flex items-center gap-2 py-3">
            <span className="h-3 w-6 rounded-full bg-blue-500" />
            <span className="font-semibold">Skills</span>
          </section>

          <section className="py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-6 rounded-full bg-blue-500" />
              <span className="font-semibold">Professional Experience</span>
            </div>

            <div className="mt-4">
              <div className="font-semibold text-sm">UI/UX Designer</div>
              <div className="font-semibold text-sm">
                ABC Digital Solutions - [Date] to Present
              </div>

              <div className="mt-4 text-gray-400 max-w-[85%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                eos accusamus alias nulla sapiente neque, laboriosam ratione
                sint nemo quidem molestias animi eius illum! Quam sed vitae
                asperiores ab itaque. At rerum asperiores, ullam veniam ab fuga
                quas eius placeat! Aspernatur nemo accusantium animi culpa,
                necessitatibus perspiciatis officia maiores itaque.
              </div>
            </div>
          </section>

          <section className="py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-6 rounded-full bg-blue-500" />
              <span className="font-semibold">Certifications</span>
            </div>

            <div className="mt-4 text-gray-400 max-w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
              accusamus alias nulla sapiente neque, laboriosam ratione sint nemo
              quidem molestias animi eius illum! Quam sed vitae asperiores ab
              itaque. At rerum asperiores, ullam veniam ab fuga quas eius
              placeat! Aspernatur nemo accusantium animi culpa, necessitatibus
              perspiciatis officia maiores itaque.
            </div>
          </section>
        </div>
      </div>

      <div className="flex gap-2 text-sm mt-5">
        <button className="flex gap-1 items-center justify-center bg-[linear-gradient(104deg,_#0075FF_0%,_#0135FF_100%)] rounded-2xl py-2 text-white px-3 w-40">
          <TbChecklist />
          Shortlisted
        </button>

        <button className="flex gap-1 items-center justify-center bg-[linear-gradient(104deg,_#0075FF_0%,_#0135FF_100%)] rounded-2xl py-2 text-white px-3 w-40">
          <PiDownloadSimpleLight size={25} />

          <span>Download for 20 credits</span>
        </button>
      </div>
    </div>
  );
};

export default CvDetails;

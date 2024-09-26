import { GoChecklist } from "react-icons/go";

const PaymentSuccess = () => {
  return (
    <>
      <div className="flex flex-col justify-center align-middle items-center gap-10 h-[calc(100%_-_22px)] py-8 overflow-auto w-full bg-[hsl(216deg_40.54%_92.75%)]">
        <GoChecklist className="text-[#2257EE] mt-5" size={150} />

        <div className=" flex flex-col justify-center items-center gap-2">
          <h1 className="text-5xl font-bold">Payment successful!</h1>

          <div className="text-gray-400 text-sm">
            The order confirmation has been sent to alma.lawson@example.com
          </div>
        </div>

        <div className="bg-white py-10 w-[90%] md:w-[50%] lg:w-[40%] rounded-xl px-10">
          <div className="flex justify-between items-center pb-8">
            <div className="flex gap-4 items-center">
              <div className="bg-gray-300 h-20 w-20 rounded-lg"></div>
              <div className="">
                <h1 className="text-xl">500 Credits / Month</h1>

                <span className="text-gray-500 mt-2 text-sm">
                  Army Professional
                </span>
              </div>
            </div>

            <button className="h-10 w-10 flex justify-center align-middle items-center">
              $49.00
            </button>
          </div>

          <div className="border-b border-t border-gray-200 py-8 flex flex-col gap-8">
            <div className="flex justify-between">
              <span className="">Transaction Date</span>
              <span className="">Tuesday, 13 June 2023</span>
            </div>

            <div className="flex justify-between">
              <span className="">Payment Method</span>
              <span className="">Mastercasrd ending with 123</span>
            </div>

            <div className="flex justify-between">
              <span className="">Subtotal</span>
              <span className="">$49.00</span>
            </div>

            <div className="flex justify-between">
              <span className="">Tax</span>
              <span className="">$00</span>
            </div>
          </div>

          <div className="flex justify-between py-8">
            <span className="">Total</span>
            <span className="font-semibold">$49.00</span>
          </div>

          <button className="bg-[linear-gradient(93deg,_#0075FF_0%,_#0135FF_100%)] text-white px-10 py-3 rounded-lg mt-8 w-[75%] flex justify-center mx-auto">
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;

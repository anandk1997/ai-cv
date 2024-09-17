"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/auth/checkbox";
import { BsThreeDots } from "react-icons/bs";

const TransactionHistory = () => {
  const [allChecked, setAllChecked] = useState(false);

  const [checkedItems, setCheckedItems] = useState(
    Array.from({ length: 20 }, () => false),
  );

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setCheckedItems(checkedItems.map(() => newCheckedState));
  };

  const handleRowCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    const allCheckedNow = newCheckedItems.every(Boolean);
    setAllChecked(allCheckedNow);
  };

  return (
    <>
      <h1 className="pb-7 text-2xl font-semibold">Credits Purchase History</h1>

      <div className="bg-white w-full rounded-md h-[calc(100%_-_80px)] overflow-auto p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="font-extrabold pb-8 border-b">
                <span className="flex align-middle gap-4">
                  <Checkbox
                    checked={allChecked}
                    onCheckedChange={handleHeaderCheckboxChange}
                  />
                  <span>Invoice</span>
                </span>
              </th>
              <th className="font-extrabold pb-8 border-b">Status</th>
              <th className="font-extrabold pb-8 border-b">Credits</th>
              <th className="font-extrabold pb-8 border-b">Amount</th>
              <th className="font-extrabold pb-8 border-b"></th>
            </tr>
          </thead>

          <tbody>
            {checkedItems.map((isChecked, index) => (
              <tr key={index}>
                <td className="py-8 border-b">
                  <span className="flex align-middle gap-4">
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => handleRowCheckboxChange(index)}
                      className={isChecked ? "bg-blue-600" : ""}
                    />
                    <span>INV-01-09072010</span>
                  </span>
                </td>
                <td className="py-8 border-b">
                  <span className="flex items-center gap-3">
                    <span className="bg-green-500 rounded-full h-3 w-3" />
                    <span className="">Completed</span>
                  </span>
                </td>
                <td className="py-8 border-b">1200</td>
                <td className="py-8 border-b">$240</td>
                <td className="py-8 border-b">
                  <BsThreeDots />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;

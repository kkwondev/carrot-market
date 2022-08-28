import { link } from "fs";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-5 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              className="flex justify-between items-center odd:bg-blue-50 even:bg-yellow-50"
              key={i}
            >
              <span className="text-gray-500 my-2">Grety Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", "d", ""].map((c, i) => (
            <li key={i} className="bg-red-500 py-2 empty:hidden">
              {c}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div
          className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto cursor-pointer
        hover:bg-teal-500 hover:text-black
        active:bg-yellow-500 focus:bg-red-500
        "
        >
          Checkout
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-14 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <span>왼쪽</span>
          <div className="space-x-3">
            <span>별4.9</span>
            <span className="shadow-lg p-2 rounded-md">하트</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium mb-1.5 text-xl">Swwon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-9  text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-9  text-xl text-gray-500 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <span className="bg-blue-500 py-2 px-5  text-sm text-center text-white rounded-lg ring-op">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

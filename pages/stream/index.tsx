import { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../../components/floating-button";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout hasTabBar title="라이브">
      <div className="px-4 divide-y-2 space-y-4">
        {[...Array(10)].map((_, i) => (
          <Link key={i} href={`/stream/${i}`}>
            <a className="pt-4">
              <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
              <h3 className=" text-gray-700 text-lg mt-2">Lets try potatos</h3>
            </a>
          </Link>
        ))}
        <FloatingButton href="/stream/create">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Stream;

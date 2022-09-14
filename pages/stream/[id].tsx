import { NextPage } from "next";
import Layout from "../../components/layout";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack title="라이브">
      <div className="py-10 px-4 space-y-4">
        <div className="pt-4">
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <span className="text-2xl block mt-3 text-gray-900">$140</span>
            <p className=" my-6 text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
          </div>
          <div className="py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-6">
            {[...Array(5)].map((_, i) => (
              <>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-300" />
                  <div className="w-1/2 text-sm text-gray-700 font-bold p-2 border border-gray-300 border-md rounded-md">
                    <p>Hi how much are you selling them for?</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-slate-300" />
                  <div className="w-1/2 text-sm text-gray-700 font-bold p-2 border border-gray-300 border-md rounded-md">
                    <p>I want ￦20,000</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="fixed w-full mx-auto max-w-md bottom-2 right-0 inset-x-0">
          <div className="flex ite ms-center relative">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-300 focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <span className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;

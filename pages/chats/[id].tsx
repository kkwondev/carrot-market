import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="kwkang">
      <div className="py-10 px-4 space-y-6">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />
        <form className="fixed w-full mx-auto max-w-md bottom-2 right-0 inset-x-0">
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
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;

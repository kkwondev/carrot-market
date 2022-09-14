import { NextPage } from "next";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="채팅">
      <div className="divide-y-[1px]">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex px-4 cursor-pointer items-center space-x-3 py-3"
          >
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className=" text-gray-700">Steve Jebs</p>
              <p className="text-sm font-medium text-gray-500">내일봐!!</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;

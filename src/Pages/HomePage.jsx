import thread from "../threads";
import Post from "../components/Post";
import { Toaster } from "react-hot-toast";
const HomePage = () => {
      return (
            <main className="p-2 max-w-[60rem] m-auto">
                  {thread.map((item, index) => {
                        return <Post item={item} key={index}></Post>;
                  })}
                  <Toaster></Toaster>
            </main>
      );
};

export default HomePage;

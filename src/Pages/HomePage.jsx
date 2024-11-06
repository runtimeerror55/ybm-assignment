import thread from "../threads";
import Post from "../components/Post";
const HomePage = () => {
      return (
            <div className="p-2 max-w-[60rem] m-auto">
                  {thread.map((item, index) => {
                        return <Post item={item} key={index}></Post>;
                  })}
            </div>
      );
};

export default HomePage;

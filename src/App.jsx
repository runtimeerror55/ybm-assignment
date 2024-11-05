import "./App.css";
import thread from "./threads";
import Post from "./components/Post";
function App() {
      return (
            <div>
                  {thread.map((item, index) => {
                        return <Post item={item} key={index}></Post>;
                  })}
            </div>
      );
}

export default App;

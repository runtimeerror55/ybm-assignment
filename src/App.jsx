import "./App.css";
import TwoArrowsInOppositeDirectionIcon from "./assets/icons/twoArrowsInOppositeDirectionIcon";
import thread from "./threads";
function App() {
      return (
            <div>
                  {thread.map((item, index) => {
                        return (
                              <div key={index}>
                                    <div className="flex gap-2 items-center">
                                          <TwoArrowsInOppositeDirectionIcon className="text-blue-500 w-3 h-3"></TwoArrowsInOppositeDirectionIcon>
                                          <img
                                                src={item.author.avatar}
                                                className="h-10"
                                          ></img>
                                          <div>{item.author.name}</div>
                                    </div>
                                    <div className="flex gap-3 mt-3">
                                          <div className="w-[0.12rem] bg-gray-300 hover:bg-blue-500 cursor-pointer"></div>
                                          <div>{item.text}</div>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
}

export default App;

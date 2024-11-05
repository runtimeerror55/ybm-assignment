import { useState } from "react";
import "./App.css";
import TwoArrowsInOppositeDirectionIcon from "./assets/icons/twoArrowsInOppositeDirectionIcon";
import thread from "./threads";
function App() {
      const [showExpandIcon, setShowExpandIcon] = useState(true);
      return (
            <div>
                  {thread.map((item, index) => {
                        return (
                              <div key={index}>
                                    <div className="flex gap-2 items-center">
                                          {showExpandIcon ? (
                                                <TwoArrowsInOppositeDirectionIcon
                                                      className="text-blue-500 w-3 h-3"
                                                      onClick={() => {
                                                            setShowExpandIcon(
                                                                  false
                                                            );
                                                      }}
                                                ></TwoArrowsInOppositeDirectionIcon>
                                          ) : null}
                                          <img
                                                src={item.author.avatar}
                                                className="h-10"
                                          ></img>
                                          <div>{item.author.name}</div>
                                    </div>
                                    {!showExpandIcon ? (
                                          <div className="flex gap-3 mt-3 ml-5">
                                                <div
                                                      className="w-[0.12rem] bg-gray-300 hover:bg-blue-500 cursor-pointer"
                                                      onClick={() => {
                                                            setShowExpandIcon(
                                                                  true
                                                            );
                                                      }}
                                                ></div>
                                                <div>{item.text}</div>
                                          </div>
                                    ) : null}
                              </div>
                        );
                  })}
            </div>
      );
}

export default App;

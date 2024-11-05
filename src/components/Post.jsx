import TwoArrowsInOppositeDirectionIcon from "../assets/icons/twoArrowsInOppositeDirectionIcon";
import { useState } from "react";
const Post = ({ item }) => {
      const [showExpandIcon, setShowExpandIcon] = useState(true);
      return (
            <div>
                  <div className="flex gap-2 items-center">
                        {showExpandIcon ? (
                              <TwoArrowsInOppositeDirectionIcon
                                    className="text-blue-500 w-3 h-3"
                                    onClick={() => {
                                          setShowExpandIcon(false);
                                    }}
                              ></TwoArrowsInOppositeDirectionIcon>
                        ) : null}
                        <img src={item.author.avatar} className="h-10"></img>
                        <div>{item.author.name}</div>
                  </div>

                  <div
                        className={`gap-3 mt-3 ml-5 ${
                              !showExpandIcon ? "flex" : "hidden"
                        }`}
                  >
                        <div
                              className="w-[0.12rem] bg-gray-300 hover:bg-blue-500 cursor-pointer"
                              onClick={() => {
                                    setShowExpandIcon(true);
                              }}
                        ></div>
                        <div className="flex flex-col gap-3">
                              <div>{item.text}</div>
                              {item.replies?.map((item, index) => {
                                    return (
                                          <Post key={index} item={item}></Post>
                                    );
                              })}
                        </div>
                  </div>
            </div>
      );
};

export default Post;

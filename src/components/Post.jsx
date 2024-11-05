import TwoArrowsInOppositeDirectionIcon from "../assets/icons/twoArrowsInOppositeDirectionIcon";
import { useState } from "react";
const Post = ({ item }) => {
      const [showExpandIcon, setShowExpandIcon] = useState(true);
      const [noOfPostsToShow, setNoOfPostsToShow] = useState(0);
      return (
            <div>
                  <div className="flex gap-2 items-center">
                        {showExpandIcon ? (
                              <TwoArrowsInOppositeDirectionIcon
                                    className="text-blue-500 w-3 h-3"
                                    onClick={() => {
                                          setShowExpandIcon(false);
                                          if (noOfPostsToShow === 0) {
                                                setNoOfPostsToShow(5);
                                          }
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
                              className="min-w-[0.12rem] bg-gray-300 hover:bg-blue-500 cursor-pointer"
                              onClick={() => {
                                    setShowExpandIcon(true);
                              }}
                        ></div>
                        <div className="flex flex-col gap-3">
                              <div>{item.text}</div>
                              {item.replies?.map((item, index) => {
                                    if (index < noOfPostsToShow) {
                                          return (
                                                <Post
                                                      key={index}
                                                      item={item}
                                                ></Post>
                                          );
                                    } else {
                                          return (
                                                <div
                                                      key={index}
                                                      className="hidden"
                                                ></div>
                                          );
                                    }
                              })}

                              {item.replies?.length > noOfPostsToShow ? (
                                    <div
                                          className="underline"
                                          onClick={() => {
                                                setNoOfPostsToShow(
                                                      (previous) => {
                                                            return Math.min(
                                                                  previous + 5,
                                                                  item.replies
                                                                        .length
                                                            );
                                                      }
                                                );
                                          }}
                                    >
                                          view more replies
                                    </div>
                              ) : null}
                        </div>
                  </div>
            </div>
      );
};

export default Post;

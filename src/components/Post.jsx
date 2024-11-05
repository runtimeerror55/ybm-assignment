import TwoArrowsInOppositeDirectionIcon from "../assets/icons/TwoArrowsInOppositeDirectionIcon";
import { useState } from "react";
import EditComment from "./EditComment";
const Post = ({ item }) => {
      const [showExpandIcon, setShowExpandIcon] = useState(true);
      const [noOfPostsToShow, setNoOfPostsToShow] = useState(0);
      const [comment, setComment] = useState(item.text);
      const [isCommentEditable, setIsCommentEditable] = useState(false);

      const handleExpandIconClick = () => {
            setShowExpandIcon(false);
            if (noOfPostsToShow === 0) {
                  setNoOfPostsToShow(5);
            }
      };

      const handleCollapsableScopeClick = () => {
            setShowExpandIcon(true);
      };

      const handleViewMoreRepliesClick = () => {
            setNoOfPostsToShow((previous) => {
                  return Math.min(previous + 5, item.replies.length);
            });
      };

      const onEditCommentSave = (value) => {
            setComment(value);
      };

      const onEditCommentClose = () => {
            setIsCommentEditable(false);
      };
      return (
            <div>
                  {isCommentEditable ? (
                        <EditComment
                              comment={comment}
                              onSave={onEditCommentSave}
                              onClose={onEditCommentClose}
                        ></EditComment>
                  ) : null}
                  <div className="flex gap-2 items-center">
                        {showExpandIcon ? (
                              <TwoArrowsInOppositeDirectionIcon
                                    className="text-blue-500 w-3 h-3 cursor-pointer"
                                    onClick={handleExpandIconClick}
                              />
                        ) : null}
                        <img src={item.author.avatar} className="h-10" />
                        <div>{item.author.name}</div>
                  </div>

                  <div
                        className={`gap-3 mt-3 ml-5 ${
                              !showExpandIcon ? "flex" : "hidden"
                        }`}
                  >
                        <button
                              className="min-w-[0.15rem] max-w-[0.15rem] bg-gray-300 hover:bg-blue-500 cursor-pointer"
                              onClick={handleCollapsableScopeClick}
                        ></button>
                        <div className="flex flex-col gap-3">
                              <div>
                                    <p>
                                          {comment}{" "}
                                          <button
                                                className="bg-black text-white px-1 rounded-md h-max text-xs ml-1"
                                                onClick={() => {
                                                      setIsCommentEditable(
                                                            true
                                                      );
                                                }}
                                          >
                                                edit
                                          </button>
                                    </p>
                              </div>

                              {item.replies?.map((item, index) => {
                                    if (index < noOfPostsToShow) {
                                          return (
                                                <Post key={index} item={item} />
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
                                    <button
                                          className="underline w-max"
                                          onClick={handleViewMoreRepliesClick}
                                    >
                                          view more replies
                                    </button>
                              ) : null}
                        </div>
                  </div>
            </div>
      );
};

export default Post;

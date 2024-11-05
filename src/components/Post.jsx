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
            </div>
      );
};

export default Post;

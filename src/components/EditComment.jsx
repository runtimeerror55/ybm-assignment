import { useEffect, useRef } from "react";

const EditComment = ({ comment = "", onSave, onClose }) => {
      const commentRef = useRef(null);

      const handleSaveButtonClick = () => {
            const value = commentRef.current.value;
            onSave(value);
            onClose();
      };

      useEffect(() => {
            commentRef.current?.focus();
      });

      return (
            <div className="fixed flex justify-center items-center left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
                  <div className="flex gap-2 flex-col rounded-md p-3 bg-white w-full max-w-[40rem] m-2">
                        <textarea
                              ref={commentRef}
                              defaultValue={comment}
                              className="h-screen max-h-96 resize-none px-2 border-2 border-black"
                        ></textarea>
                        <div className="flex gap-2">
                              <button
                                    className="bg-red-600 text-white px-2 py-1 rounded-md tex-lg"
                                    onClick={onClose}
                              >
                                    GO BACK
                              </button>
                              <button
                                    className="bg-green-600 text-white px-2 py-1 rounded-md tex-lg"
                                    onClick={handleSaveButtonClick}
                              >
                                    SAVE
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default EditComment;

import toast from "react-hot-toast";
export const notify = (message = "Toast", type = "error") => {
      const toastOptions = { position: "top-right" };
      type
            ? toast?.[type](message, toastOptions)
            : toast(message, toastOptions);
};

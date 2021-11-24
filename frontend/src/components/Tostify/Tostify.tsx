import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastify = (message:string, type:string) => {
  if (type === 'success') {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0
    });
  } else if (type === 'error') {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0
    });
  } else if (type === 'info') {
    toast.info(
      message,
      {
        position: "top-right",
        autoClose: 172800000 /*  48h */,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0
      }
    );
  } else if (type === 'warn') {
    toast.warn(
        message,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0
      }
    );
  } else if (type === 'dark') {
    toast.dark(
        message,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0
      }
    );
  }
};

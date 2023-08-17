import { toast } from 'react-toastify';

export const toastError = (message: string) => {
  toast.error(`${message}`, {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const toastSuccess = (message: string) => {
  toast.success(`${message}`, {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

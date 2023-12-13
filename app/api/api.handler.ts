import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ApiHandlerError = async (error: AxiosError) => {
  let message = 'Bad request';
  if (error.response?.status === 404) {
    message = 'Not found';
  }
  toast.error(message);
};

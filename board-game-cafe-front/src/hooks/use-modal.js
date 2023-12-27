import { useDispatch } from "react-redux";
import { modalAction } from "../store/redux/modal-slice";

const useModal = () => {
  const dispatchStore = useDispatch();

  const showAlert = ({ message }) => {
    dispatchStore(modalAction.show({ show: true, message }));
  };

  return { showAlert };
};

export default useModal;

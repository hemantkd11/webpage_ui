import useModal from "./ModelContext";

import WebModal from "../model/Model";

const ModalPage = () => {
  const { modal } = useModal();
  const ModalMapper = {
    ADD_MODEL: WebModal,
  };
  const ModalRapper = ModalMapper[modal.modal];
  return modal.modal ? <ModalRapper /> : null;
};
export default ModalPage;

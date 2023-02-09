import useModal from "./ModelContext";

import VegaModal from "../model/Model";

const ModalPage = () =>{
    const {modal} = useModal()
    const ModalMapper = {
        ADD_MODEL:VegaModal
    }
    const ModalRapper = ModalMapper[modal.modal];
    return modal.modal ? <ModalRapper/> : null
}
export default ModalPage
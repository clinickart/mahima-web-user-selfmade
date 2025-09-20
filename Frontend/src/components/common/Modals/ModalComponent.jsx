import { Icon } from "@iconify/react/dist/iconify.js";
import { ReusableModal } from "../Main/MainComponent";
import "./ModalComponent.css"
export const HandleSuccessModal = ({ img, title, desc, show, onHide }) => {
  return (
    <ReusableModal
      show={show}
      onHide={onHide}
      title=""
      onSubmit={() => console.log("Form submitted")}
      hideFooter
      size={"md"}
    >
      <div className="success-modal">
        <div>
          <Icon icon="mdi:check-decagram" className="success-modal-icon" />
        </div>
        <p>{title}</p>
      </div>
    </ReusableModal>
  );
};

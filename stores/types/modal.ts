export type ModalType = "create-event";

export interface ModalStateType {
  isOpen: boolean;
  modal: ModalType | null;
  openModal: (modal: ModalType) => void;
  closeModal: (modal: ModalType) => void;
}

export type ModalType = "create-event" | "create-member";

export interface ModalStateType {
  isOpen: boolean;
  modal: ModalType | null;
  openModal: (modal: ModalType) => void;
  closeModal: (modal: ModalType) => void;
}

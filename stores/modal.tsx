import { StateCreator } from "zustand";
import { AllStoreType } from "./types";
import { ModalStateType, ModalType } from "./types/modal";

export const createModalSlice: StateCreator<
  AllStoreType,
  [],
  [],
  ModalStateType
> = (set) => ({
  isOpen: false,
  modal: null,
  openModal: (modal: ModalType) => set(() => ({ isOpen: true, modal })),
  closeModal: (modal: ModalType) => set(() => ({ isOpen: false, modal })),
});

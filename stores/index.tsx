import { create } from "zustand";
import { createModalSlice } from "./modal";
import { AllStoreType } from "./types";

export const useBoundStore = create<AllStoreType>()((...a) => ({
  ...createModalSlice(...a),
}));

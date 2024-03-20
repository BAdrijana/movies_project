import { create } from "zustand";

type MyStore = {
  show: boolean;
  toggleShow: () => void;
};
export const useModalStore = create<MyStore>((set) => ({
  show: false,
  toggleShow: () => set((state) => ({ show: !state.show })),
}));

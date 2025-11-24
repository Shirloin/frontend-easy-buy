import { create } from "zustand";

type SearchStoreState = {
  search: string;
  setSearch: (search: string) => void;
  clearSearch: () => void;
};

const useSearchStore = create<SearchStoreState>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
  clearSearch: () => set({ search: "" }),
}));

export default useSearchStore;


import { create } from "zustand";
import { AlertState, SearchStateStore } from "../interface";
import { SEARCH_STATE } from "../constants/constants";


export const useAlertStore = create<AlertState>((set) => ({
    message: '',
    type: null,
    showAlert: false,
    setAlert: (message: string, type: AlertType) =>
      set({ message, type, showAlert: true }),
    clearAlert: () => set({ showAlert: false }),
  }));

  export const useSearchStore = create<SearchStateStore>((set) => ({
    searchQuery: '',
    searchBarState: SEARCH_STATE.CLOSED,
    setSearchQuery: (query) => set({ searchQuery: query }),
    toggleSearchBar: () =>
      set((state) => ({
        searchBarState: state.searchBarState === SEARCH_STATE.CLOSED ? SEARCH_STATE.OPEN : SEARCH_STATE.CLOSED,
      })),
    resetSearch: () => set({ searchQuery: '' }),
  }));
import { SearchState } from "../constants/constants";

type AlertType = 'success' | 'warning' | 'info' | null;

export interface AlertState {
    message: string;
    type: AlertType;
    showAlert: boolean;
    setAlert: (message: string, type: AlertType) => void;
    clearAlert: () => void;
  }

  export interface SearchStateStore {
    searchQuery: string;
    searchBarState: SearchState;
    setSearchQuery: (query: string) => void;
    toggleSearchBar: () => void;
    resetSearch: () => void;
  }
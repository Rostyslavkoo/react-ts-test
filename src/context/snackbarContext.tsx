import { createContext } from 'react';
type Filter = {
	snackbars: string[];
    setSnackbars?: (snackbars: string[]) => void;
};

export const SnackbarContext = createContext<Filter | null>(null);

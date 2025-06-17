import { createContext } from 'react';
type Filter = {
	color: string | null;
    setColor?: (color: string | null) => void;
};

export const FilterContext = createContext<Filter | null>(null);

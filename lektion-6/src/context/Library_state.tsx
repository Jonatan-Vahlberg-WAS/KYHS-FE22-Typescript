import React, { createContext, useContext, useState } from 'react';

// Definie a book object
interface Book {
	id: number;
	title: string;
	author: string
}

//Define shape of library state
interface LibraryState {
  books: Book[];
  selectedBookId?: number;
}

//Create initial state
const initialState: LibraryState = {
	books: [],
}

//Create the context
const LibraryContext = createContext<{
    state: LibraryState;
    setState: React.Dispatch<React.SetStateAction<LibraryState>>;
}>({
    state: initialState,
    setState: () => {},
});

//ProviderProps
interface LibraryProviderProps {
    children: React.ReactNode;
}

//Create the provider
const LibraryProvider: React.FC<LibraryProviderProps> = ({ children }) => {
    const [state, setState] = useState(initialState);
    return (
        <LibraryContext.Provider value={{ state, setState }}>
            {children}
        </LibraryContext.Provider>
    );
};

//Create the useLibrary hook
const useLibrary = () => {
    const context = useContext(LibraryContext);
    if (context === undefined) {
        throw new Error('useLibrary must be used within a LibraryProvider');
    }
    return context;
}

export { LibraryProvider, useLibrary };
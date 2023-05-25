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
//Create the context using partial state
const LibraryContext = createContext<Partial<{
    state: LibraryState;
    setState: React.Dispatch<React.SetStateAction<LibraryState>>;
}>>({});

//ProviderProps
interface LibraryProviderProps {
    children: React.ReactNode;
}

//Create the provider
const LibraryProvider: React.FC<LibraryProviderProps> = ({ children }) => {
    const [state, setState] = useState<LibraryState>({
        books: [],
    });
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
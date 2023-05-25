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
const LibraryContext = createContext<Partial<LibraryState>>({});

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

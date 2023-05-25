import React, { createContext, useContext, useReducer } from 'react';

// Define a book object
interface Book {
  id: number;
  title: string;
  author: string;
}

// Define shape of library state
interface LibraryState {
  books: Book[];
  selectedBookId?: number;
}

// Define actions
type LibraryAction =
  | { type: 'ADD_BOOK'; book: Book }
  | { type: 'SELECT_BOOK'; bookId: number };

// Create initial state
const initialState: LibraryState = {
  books: [],
};

// Create reducer function
const libraryReducer = (state: LibraryState, action: LibraryAction): LibraryState => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case 'SELECT_BOOK':
      return {
        ...state,
        selectedBookId: action.bookId,
      };
    default:
      return state;
  }
};

// Create the context
const LibraryContext = createContext<{
  state: LibraryState;
  addBook: (book: Book) => void;
  selectBook: (bookId: number) => void;
}>({
  state: initialState,
  addBook: () => {},
  selectBook: () => {},
});

// ProviderProps
interface LibraryProviderProps {
  children: React.ReactNode;
}

// Create the provider
const LibraryProvider: React.FC<LibraryProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(libraryReducer, initialState);

  const addBook = (book: Book) => {
    dispatch({ type: 'ADD_BOOK', book });
  };

  const selectBook = (bookId: number) => {
    dispatch({ type: 'SELECT_BOOK', bookId });
  };

  return (
    <LibraryContext.Provider value={{ state, addBook, selectBook }}>
      {children}
    </LibraryContext.Provider>
  );
};

// Create the useLibrary hook
const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};

export { LibraryProvider, useLibrary };
import initialState from './initialState';
import ACTIONS from './actions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case ACTIONS.CLICK_BOOK:
      return {
        ...state,
        currentBook: action.payload,
      };
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };
    case ACTIONS.SHOW_FOUND:
      return {
        ...state,
        found: true,
      };
    case ACTIONS.HIDE_FOUND:
      return {
        ...state,
        found: false,
      };
    case ACTIONS.SET_NOTHING_FOUND:
      return {
        ...state,
        nothingFound: action.payload,
      };
    case ACTIONS.START_PRELOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.STOP_PRELOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;

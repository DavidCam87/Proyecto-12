import { useReducer } from 'react';

const initialState = {
  ideas: [],
};

const ADD_IDEA = 'ADD_IDEA';

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_IDEA:
      return {
        ...state,
        ideas: [...state.ideas, action.payload],
      };
    default:
      return state;
  }
};

const useAppReducer = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addIdea = (idea) => {
    dispatch({ type: ADD_IDEA, payload: idea });
  };

  return {
    state,
    addIdea,
  };
};

export { useAppReducer, initialState, appReducer };
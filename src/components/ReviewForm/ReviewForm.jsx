import classNames from 'classnames';
import React, { useReducer } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from '../Buttons/Button';
import { Rating } from '../Rating/component';
import style from './style.module.scss';

const initialState = {
  name: '',
  text: '',
  rating: 0,
};

const actionTypes = {
  SET_NAME: 'SET_NAME',
  SET_TEXT: 'SET_TEXT',
  SET_RATING: 'SET_RATING',
  CLEAR_FORM: 'CLEAR_FORM',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return { ...state, name: action.payload };
    case actionTypes.SET_TEXT:
      return { ...state, text: action.payload };
    case actionTypes.SET_RATING:
      return { ...state, rating: action.payload };
    case actionTypes.CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme } = useContext(ThemeContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.CLEAR_FORM });
  };

  const handleRatingChange = (newRating) => {
    dispatch({ type: actionTypes.SET_RATING, payload: newRating });
  };

  return (
    <form onSubmit={handleSubmit} className={classNames(style.root, { [style.rootDark]: theme === 'dark' })}>
      <div className={style.nameBlock}>
        <label className={style.tittle} htmlFor="name">
          Name:
        </label>
        <input
          className={style.input}
          type="text"
          id="name"
          name={actionTypes.SET_NAME}
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className={style.reviewTextBlock}>
        <label className={style.tittle} htmlFor="text">
          Review text:
        </label>
        <textarea
          className={classNames(style.input, style.textarea)}
          id="text"
          name={actionTypes.SET_TEXT}
          value={state.text}
          onChange={handleChange}
        />
      </div>
      <Rating state={state} onClick={handleRatingChange} />
      <div className={style.buttonBlock}>
        <Button size="l" title={'Save'} onClick={handleClearForm} />
      </div>
    </form>
  );
};

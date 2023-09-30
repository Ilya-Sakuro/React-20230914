import style from './style.module.scss';

export const Review = ({ user, text }) => {
  return (
    <li className={style.item}>
      <span className={style.name}>{user}:</span> <span>{text}</span>
    </li>
  );
};

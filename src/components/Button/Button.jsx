import s from './Button.module.css';

const Button = ({
  text = '',
  type = 'submit',
  btnClass = 'btnDark',
  handleClick,
}) => {
  return (
    <button className={s[btnClass]} onClick={handleClick} type={type}>
      {text}
    </button>
  );
};

export default Button;

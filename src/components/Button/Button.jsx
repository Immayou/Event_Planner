import s from './Button.module.css';

const Button = ({
  text = '',
  type = 'submit',
  btnClass = 'btnDark',
  handleClick,
  disabled = false,
}) => {
  return (
    <button
      className={s[btnClass]}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

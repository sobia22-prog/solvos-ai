const Button = ({
  text,
  leftIcon,
  rightIcon,
  iconSize = 20,
  iconPosition = "left",
  classes = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-black text-white hover:bg-gray-800 transition-all duration-200 cursor-pointer ${classes}`
      }
      onClick={onClick}
    >
      {iconPosition === "left" && leftIcon && (
        <img src={leftIcon} alt="" width={iconSize} height={iconSize} />
      )}

      <span>{text}</span>

      {iconPosition === "right" && rightIcon && (
        <img src={rightIcon} alt="" width={iconSize} height={iconSize} />
      )}
    </button>
  );
};

export default Button;

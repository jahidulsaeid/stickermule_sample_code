import cn from 'classnames';

type BadgeProps = {
  className?: string;
  color?: string;
  textColor?: string;
  text?: string;
  style?: any;
};

const Badge: React.FC<BadgeProps> = ({
  className,
  color: colorOverride,
  textColor: textColorOverride,
  text,
  style,
}) => {

  const classes = {
    root: 'px-3 py-1 rounded-full text-sm',
    default: 'bg-heading',
    text: 'text-light',
  };

  return (
    <span
      className={cn(
        classes.root,
        {
          [classes.default]: !colorOverride,
          [classes.text]: !textColorOverride,
        },
        colorOverride,
        textColorOverride,
        className
      )}
      style={style}
    >
      {text!}
    </span>
  );
};

export default Badge;

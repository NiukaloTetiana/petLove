import Icons from "../../assets/sprite.svg";

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  id: string;
  size?: number;
}

export const Icon: React.FC<IIconProps> = ({ id, size, ...rest }) => {
  return (
    <svg width={size} height={size} {...rest}>
      <use href={`${Icons}#icon-${id}`} />
    </svg>
  );
};

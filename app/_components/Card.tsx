import { IconType } from "react-icons";

export interface Props  { Icon: IconType; title: string; descriptions: string };

const Card = ({ Icon, descriptions, title }: Props) => {
  return (
    <div className="cards-container">
      <div>
        <Icon className="react-icon h-12 w-12 text-blue-700" />
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{descriptions}</p>
      </div>
    </div>
  );
};

export default Card;

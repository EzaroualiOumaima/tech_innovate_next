import { StaticImageData } from "next/image";

export interface Props {
  image: StaticImageData;
  service: string;
  title: string;
  descriptions: string;
}

const CardProjects = ({ image, title, descriptions , service }: Props) => {
  return (
    <div  style={{ backgroundImage: `url(${image})` }}>
      <h2>{service}</h2>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-lg">{descriptions}</p>
    </div>
  );
};

export default CardProjects;

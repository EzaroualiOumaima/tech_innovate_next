import { IconType } from "react-icons";

type Props = { Icon: IconType; title: string; descriptions: string, secondDescription : string};

const ContactCard = ({ Icon, descriptions, title, secondDescription}: Props) => {
  return (
    <div className="Contact-Cards">
      <div>
        <Icon className="react-icon h-12 w-12  text-blue-600" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{descriptions}</p>
        <p className="text-lg">{secondDescription}</p>
      </div>
    </div>
  )
}

export default ContactCard
import {ReactNode} from "react";
import VkIcon from "../UI/icon/VkIcon.tsx";
import TelegramIcon from "../UI/icon/TelegramIcon.tsx";
import Whatsapp from "../UI/icon/Whatsapp.tsx";
import YouTube from "../UI/icon/YouTube.tsx";


interface ISocials {
  icon: ReactNode;
  name: string;
  to: string
}
export const socials: ISocials[] = [
  {
    icon: <VkIcon />,
    name: 'Вконтакт',
    to: "https://vk.com/"
  },  {
    icon: <TelegramIcon />,
    name: 'Телеграмм',
    to: "https://web.telegram.org/"
  },  {
    icon: <Whatsapp />,
    name: 'Ватсап',
    to: "https://web.whatsapp.com/"
  },  {
    icon: <YouTube />,
    name: 'Ютуб',
    to: "https://www.youtube.com/"
  },
]
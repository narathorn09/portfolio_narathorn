import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const contactItems = [
  {
    icon: <MdEmail className="size-6" />,
    title: "narathorn.work@gmail.com",
    href: "mailto:narathorn.work@gmail.com",
  },
  {
    icon: <FaFacebook className="size-5" />,
    title: "Narathorn Noophm",
    href: "https://web.facebook.com/profile.php?id=100004325625978",
  },
  {
    icon: <FaPhoneAlt className="size-4" />,
    title: "0939422949",
    href: "tel:0939422949",
  },
];

export default contactItems;

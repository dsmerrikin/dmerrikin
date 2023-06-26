import React, { FC } from "react";
import { SocialInterface } from "./SocialInterface";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social: FC<SocialInterface> = ({ id, title, icon, url }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "fa-facebook":
        return faFacebookSquare;
      case "fa-square-instagram":
        return faInstagramSquare;
      case "fa-square-twitter":
        return faTwitterSquare;
      case "fa-linkedin":
        return faLinkedin;
      default:
        return null;
    }
  };

  return (
    <a
      className='flex items-center justify-center w-8 h-8 founded-full mx-2 text-3xl text-body-color hover:text-primary'
      key={id}
      aria-label='social-link'
      data-name='social-link'
      href={url}
      target='_blank'
    >
      <FontAwesomeIcon
        icon={getIcon(icon)}
        style={{ color: "#ffffff" }}
        aria-description={title}
      />
    </a>
  );
};

export default Social;
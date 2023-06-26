import React, { FC } from "react";
import { ServiceItemInterface } from "./ServiceItemInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPeopleArrows,
  faSitemap,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const ServiceItem: FC<ServiceItemInterface> = ({
  id,
  title,
  icon,
  summary,
}) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "fa-globe":
        return faGlobe;
      case "fa-people-arrows":
        return faPeopleArrows;
      case "fa-sitemap":
        return faSitemap;
      case "fa-bolt":
        return faBolt;
      default:
        return null;
    }
  };

  return (
    <div
      className='bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8'
      key={id}
    >
      <div className='mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary'>
        <FontAwesomeIcon
          icon={getIcon(icon)}
          fontSize={"1.5rem"}
        />
      </div>
      <h3 className='font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3'>
        {title}
      </h3>
      <p className='font-medium text-body-color group-hover:text-white leading-relaxed text-sm'>
        {summary}
      </p>
    </div>
  );
};

export default ServiceItem;

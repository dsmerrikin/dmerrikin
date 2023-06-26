import Image from "next/image";
import { PortfolioItemInterface } from "./PortfolioItemInterface";
import { FC } from "react";
import styles from "./PortfolioItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const PortfolioItem: FC<PortfolioItemInterface> = ({
  id,
  imageSrc,
  title,
  description,
  url,
  category,
}) => {
  return (
    <div
      className='w-1/6 md:w-1/4 px-4 item web app'
      key={id}
      data-category={category}
    >
      <div className='mb-12'>
        <div
          className={`${styles.portfolioItemImgParent} relative group mb-4 overflow-hidden shadow-service rounded-md`}
        >
          <div className={`${styles.portfolioItemImg} w-full h-full`}>
            <Image
              src={imageSrc}
              alt='image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='absolute w-full h-full top-0 left-0 bg-primary bg-opacity-[17%] flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition'>
            <a
              href={url}
              target='_blank'
              className='glightbox w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full'
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ color: "#ffffff" }}
                fontSize={"1rem"}
              />
            </a>
          </div>
        </div>

        <h3 className='mt-6'>
          <a
            href={url}
            target='_blank'
            className='font-semibold text-black hover:text-primary text-xl inline-block mb-3'
          >
            {title}
          </a>
        </h3>
        <p className='font-medium text-base text-white whitespace-pre-line'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;

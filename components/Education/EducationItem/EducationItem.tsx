import { FC } from "react";
import { EducationItemInterface } from "./EducationItemInterface";

const EducationItem: FC<EducationItemInterface> = ({
  id,
  company,
  title,
  date,
  summary,
}) => {
  const Wrapper = id % 2 !== 0 ? LeftWrapper : RightWrapper;

  return (
    <>
      <Wrapper
        id={id}
        title={title}
        company={company}
        date={date}
        summary={summary}
      />
      <div className='w-full lg:w-1/2 px-4'></div>
      <div className='w-full lg:w-1/2 px-4'></div>
    </>
  );
};

const LeftWrapper: FC<EducationItemInterface> = ({
  title,
  company,
  date,
  summary,
}) => (
  <div className='w-full lg:w-1/2 px-4'>
    <div className='lg:max-w-[428px] xl:max-w-[490px] w-full ml-auto pl-8 sm:pl-11 lg:pl-0 lg:pr-0 lg:mr-5 lg:text-right relative pb-12'>
      <span className='absolute top-1 left-0 lg:left-auto lg:-right-11 w-4 h-4 rounded-full bg-white border-4 border-primary'></span>
      <h3 className='font-semibold text-xl text-black mb-1'>{title}</h3>
      <p className='font-semibold text-base text-body-color mb-3'>{company}</p>
      <span className='inline-flex items-center justify-center py-2 px-4 rounded-full bg-primary text-white text-xs font-semibold mb-5'>
        {date}
      </span>
      <p className='font-medium text-base text-body-color'>{summary}</p>
    </div>
  </div>
);

const RightWrapper: FC<EducationItemInterface> = ({
  title,
  company,
  date,
  summary,
}) => (
  <div className='w-full lg:w-1/2 px-4'>
    <div className='lg:max-w-[428px] xl:max-w-[490px] w-full pl-8 sm:pl-11 lg:pl-0 lg:ml-5 relative pb-12'>
      <span className='absolute top-1 left-0 lg:-left-11 w-4 h-4 rounded-full bg-white border-4 border-primary'></span>
      <h3 className='font-semibold text-xl text-black mb-1'>{title}</h3>
      <p className='font-semibold text-base text-body-color mb-3'>{company}</p>
      <span className='inline-flex items-center justify-center py-2 px-4 rounded-full bg-primary text-white text-xs font-semibold mb-5'>
        {date}
      </span>
      <p className='font-medium text-base text-body-color'>{summary}</p>
    </div>
  </div>
);

export default EducationItem;

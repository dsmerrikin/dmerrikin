import Image from "next/image";

const Client = () => {
  return (
    <a
      href='https://uideck.com'
      target='_blank'
      rel='nofollow noreferrer'
      className='relative'
    >
      <Image
        src='/images/brands/uideck.svg'
        alt='uideck'
        fill={true}
      />
    </a>
  );
};

export default Client;

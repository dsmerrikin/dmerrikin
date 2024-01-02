// KonamiCode.js
import React, { useEffect } from 'react';
import Konami from 'react-konami-code';
import Image from 'next/image';

const KonamiCode = ({ onKonami }) => {
  useEffect(() => {
    // Initialize any client-side logic here
  }, []);

  return (
    <Konami action={() => onKonami()}>
      <>
        <div className="moving-image-container">
          <Image src='/images/konami/mario.gif' alt='Mario' width={200} height={235} />
        </div>
        <audio id="konamiAudio" src="/sounds/Overworld.mp3" />
      </>
    </Konami>
  );
};

export default KonamiCode;

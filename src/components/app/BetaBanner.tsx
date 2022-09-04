import Link from 'next/link';
import { FiX } from '@react-icons/all-files/fi/FiX';
import { useState } from 'react';

const BANNER_LOCAL_STORAGE_KEY = 'BETA_BANNER_SHOWN';

const BetaBanner = () => {
  const shouldBannerBeShownInitially =
    typeof window !== 'undefined'
      ? localStorage.getItem(BANNER_LOCAL_STORAGE_KEY) !== 'true'
      : false;
  const [shouldBannerBeShown, setShouldBannerBeShown] = useState(shouldBannerBeShownInitially);

  const closeBanner = () => {
    setShouldBannerBeShown(false);
    localStorage.setItem(BANNER_LOCAL_STORAGE_KEY, 'true');
  };

  if (!shouldBannerBeShown) return null;

  return (
    <div className="fixed bottom-0 w-full" style={{ zIndex: 1000 }}>
      {' '}
      {/*higher than leaflet's*/}
      <div className="w-container mb-5 w-container mx-auto">
        <div className="relative bg-primaryBg backdrop-filter backdrop-blur-2xl bg-opacity-70 border-2 rounded border-primary text-primary px-5 py-2">
          <button className="absolute right-2 top-2" onClick={closeBanner}>
            <FiX />
          </button>
          <h4 className="font-bold text-lg">Aplikacja w fazie beta</h4>
          <p>
            Nie wszystkie funkcje serwisu mogą działać poprawnie. Jeśli zauważysz błąd w działaniu
            aplikacji lub chcesz podzielić się sugestią,{' '}
            <Link href="/#contact-us">
              <a className="underline">skontaktuj się z nami</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetaBanner;

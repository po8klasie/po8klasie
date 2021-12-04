import { FC } from 'react';
import Image from 'next/image';

const MockUpImage: FC<{ src: string }> = ({ src }) => (
  <Image src={src} width={800} height={300} objectFit="contain" />
);

const FeaturesSection: FC = () => (
  <div className="mt-32">
    <h2 className="text-center text-3xl font-bold">Dla uczniów i rodziców</h2>
    <div className="w-4/5 mx-auto mt-20">
      <div className="grid gap-x-10 gap-y-20 lg:grid-cols-2">
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Wyszukiwarka</h3>
            <p className="text-lg">
              Wybór szkoły średniej jest bardzo ważnym krokiem w kierunku dalszej edukacji.
              Chcielibyśmy, aby każdy mógł się na nim w pełni skupić bez niepotrzebnego poświęcania
              czasu i energii na research szkół dopasowanych do Twoich priorytetów.
            </p>
          </div>
        </div>
        <div className="w-full">
          <MockUpImage src="/assets/website/img/features-lookup.png" />
        </div>

        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Research</h3>
            <p className="text-lg">
              Dążymy do tego, aby prezentować dane, które najbardziej są potrzebne uczniom. Przy
              wsparciu badaczy i aktywistów NGO dbamy o to, aby samorządy udostępniały właśnie te
              dane, których kandydaci najbardziej potrzebują.
            </p>
          </div>
        </div>
        <div className="w-full">
          <MockUpImage src="/assets/website/img/features-survey.png" />
        </div>
      </div>
    </div>
  </div>
);

export default FeaturesSection;

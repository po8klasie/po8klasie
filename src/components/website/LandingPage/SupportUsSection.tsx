import { FC } from 'react';
import Brand from '../Brand';

const SupportCard: FC<{ title: string; linkElement: JSX.Element }> = ({
  title,
  linkElement,
  children,
}) => (
  <div className="p-10 border border-light rounded-xl shadow-md flex flex-col justify-between">
    <div>
      <h2 className="text-center text-2xl font-bold">{title}</h2>
      <p className="mt-10 text-lg text-center">{children}</p>
    </div>
    <div className="mt-10 flex justify-center">{linkElement}</div>
  </div>
);

// support-us id is used in navbar. -top-52 to leverage navbar height
const SupportUsSection: FC = () => (
  <div className="my-32 relative">
    <span id="support-us" className="absolute -top-52" />
    <div className="w-container mx-auto">
      <h2 className="text-center text-3xl font-bold">Wesprzyj nas</h2>
      <div className="mt-20 grid lg:grid-cols-3 gap-10">
        <SupportCard
          title="Zostań sponsorem"
          linkElement={
            <a href="mailto:info@po8klasie.pl" className="underline font-bold text-lg">
              Skontaktuj się z nami
            </a>
          }
        >
          Jeśli chcesz wesprzeć rozwój naszego projektu jako firma lub organizacja pozarządowa.
        </SupportCard>
        <SupportCard
          title="Patronite"
          linkElement={<span className="text-dark opacity-60 font-bold text-lg">Wkrótce</span>}
        >
          Pracujemy wolontaryjnie. Twoje wsparcie pozwoli nam szybciej wdrożyć wszystkie niesamowite
          możliwości <Brand />.
        </SupportCard>
        <SupportCard
          title="GitHub Sponsors"
          linkElement={<span className="text-dark opacity-60 font-bold text-lg">Wkrótce</span>}
        >
          Jeśli ciekawi Cię techniczna strona naszego projektu, zerknij na nasz{' '}
          <a className="underline" href="https://github.com/po8klasie" target="_blank" rel="noreferrer noopener">
            profil na GitHubie
          </a>
          . Będziesz mógł wspierać nas też przez GitHub Sponsors.
        </SupportCard>
      </div>
    </div>
  </div>
);

export default SupportUsSection;

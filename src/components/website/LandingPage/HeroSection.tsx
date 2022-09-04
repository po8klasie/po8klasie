import React, { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import Brand from '../Brand';

import heroGradientsImg from '../../../assets/website/img/hero-gradients.png';
import heroGradientsImgPlaceholder from '../../../assets/website/img/hero-gradients.png?lqip';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import capitalize from 'lodash/capitalize';
import { isFeatureFlagEnabled, publicRuntimeConfig } from '../../../runtimeConfig';

const betaBadgeStyle =
  'absolute -top-3 -right-3 rounded-full bg-primaryBg text-primary uppercase px-2 py-1 text-xs font-bold';

export type ProjectsList = { projectID: string; appName: string }[];

interface ProjectsLinksProps {
  projectsList: ProjectsList;
  heading: string;
}

const ProjectsLinks: FC<ProjectsLinksProps> = ({ projectsList, heading }) => (
  <>
    <h3 className="text-center text-lg">{heading}</h3>
    <div className="flex flex-wrap justify-center mt-5">
      {projectsList.map(({ projectID, appName }) => (
        <Link href={`/${projectID}`}>
          <a className="relative py-2 px-5 border-2 font-bold m-3 hover:bg-opacity-10 hover:bg-primary transition">
            <span className={betaBadgeStyle}>Beta</span>
            {capitalize(appName)}
          </a>
        </Link>
      ))}
    </div>
  </>
);

interface HeroSectionProps {
  projectsList: ProjectsList;
}

const HeroSection: FC<HeroSectionProps> = ({ projectsList }) => {
  const { t } = useTranslation('landing', { keyPrefix: 'heroSection' });
  return (
    <div className="pt-64 pb-32 relative">
      <ProgressiveImage src={heroGradientsImg} placeholder={heroGradientsImgPlaceholder}>
        {(src: string) => (
          <img src={src} alt="" className="absolute top-0 left-0 md:w-full md:h-full -z-1" />
        )}
      </ProgressiveImage>
      <div className="sm:w-narrowContainer w-container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-relaxed">
          <Brand /> {t('title')}
        </h1>
        <h2 className="text-3xl mt-16">{t('subTitle')}</h2>
      </div>
      <div className="mt-10">
        {isFeatureFlagEnabled(publicRuntimeConfig.SHOW_LINKS_TO_APP) && (
          <ProjectsLinks projectsList={projectsList} heading={t('selectCity')} />
        )}
      </div>
    </div>
  );
};

export default HeroSection;

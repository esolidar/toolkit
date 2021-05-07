import SliderImagesLanding from './SliderImagesLanding';
import { cdnStaticUrl } from '../../constants/env';

export default {
  title: 'Components/SliderImages/SliderImagesLanding',
  component: SliderImagesLanding,
};

const Template = args => <SliderImagesLanding {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['SliderImagesLanding.test.js'],
};
Default.args = {
  autoPlay: true,
  imgList: [
    {
      id: 0,
      alt: 'Delfim',
      src: `${cdnStaticUrl}/frontend/assets/landing/delfim.png`,
      url: 'https://delfim.esolidar.com',
    },
    {
      id: 1,
      alt: 'Happiness',
      src: `${cdnStaticUrl}/frontend/assets/landing/happiness.png`,
      url: 'https://happiness.esolidar.com',
    },
    {
      id: 2,
      alt: 'Human Power Hub',
      src: `${cdnStaticUrl}/frontend/assets/landing/hph.png`,
      url: 'https://www.humanpowerhub.org',
    },
    {
      id: 3,
      alt: 'Instituto CPFL',
      src: `${cdnStaticUrl}/frontend/assets/landing/instituto_cpfl.png`,
      url: 'https://www.institutocpfl.org.br',
    },
    {
      id: 4,
      alt: 'Liga Portugal',
      src: `${cdnStaticUrl}/frontend/assets/landing/liga_portugal.png`,
      url: 'https://www.ligaportugal.pt/pt/homepage',
    },
    {
      id: 5,
      alt: 'Odontoprev',
      src: `${cdnStaticUrl}/frontend/assets/landing/odontoprev.png`,
      url: 'https://www.odontoprevonline.com.br',
    },
    {
      id: 6,
      alt: 'Tap',
      src: `${cdnStaticUrl}/frontend/assets/landing/tap_logo.png`,
      url: 'https://www.esolidar.com/b/tapresponsabilidadesocial',
    },
    {
      id: 7,
      alt: 'The Lotus Yang',
      src: `${cdnStaticUrl}/frontend/assets/landing/the_lotus_yang.png`,
      url: 'https://www.bbsk.agency',
    },
  ],
  imgWidth: '150px',
  title: 'Clientes',
};

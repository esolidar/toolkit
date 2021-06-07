import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { IntlProvider } from 'react-intl';
import CrowdfundingHeaderRigth from '../index';

configure({ adapter: new Adapter() });

const propsCampaign = {
  id: 44,
  user_id: null,
  institution_id: null,
  company_id: 1,
  sub_category_id: 13,
  product_id: 48,
  title: 'teste para aparecer na eSolidar',
  title_en: null,
  tags: null,
  description: 'teste',
  description_en: null,
  video: null,
  reward: 0,
  reward_description: null,
  goal: 10000,
  minimum_contribution: 10,
  currency_id: 1,
  start_date: '2020-06-21 23:00:00',
  end_date: '2020-07-28 15:30:00',
  timezone: 'America/Sao_Paulo',
  position: 0,
  recipient_visible: 1,
  status: 'approved',
  esolidar_list: 1,
  updated_at: '2020-07-02 15:32:48',
  created_at: '2020-06-22 14:14:37',
  contributes_count: 2,
  contributes_sum: 60,
  product: {
    id: 48,
    payment_method_id: 15,
    type: 'crowdfunding',
    updated_at: '2020-07-02 15:32:48',
    created_at: '2020-06-22 14:14:37',
    payment_method: {
      id: 15,
      paypal: 1,
      stripe: 1,
      sibs_checkout: 0,
      sibs_mbway: 0,
      sibs_multibanco: 0,
      sibs_directdebit_sepa: 0,
      sibs_cc: 0,
      utrust: 1,
      updated_at: '2020-05-14 14:35:28',
      created_at: '2020-05-14 14:35:28',
    },
  },
  institution: null,
  company: {
    id: 1,
    name: 'Webankor (eSolidar)',
    logo: 'https://cdn.testesolidar.com/companies/e96d453b-a752-4f3f-936f-409c8c735b18.png',
    country_id: 150,
    currency_id: 1,
    thumbs: {
      detail:
        'https://cdn.testesolidar.com/companies/e96d453b-a752-4f3f-936f-409c8c735b18-DETAIL.png',
      thumb:
        'https://cdn.testesolidar.com/companies/e96d453b-a752-4f3f-936f-409c8c735b18-THUMB.png',
      cover_image: 'https://static.testesolidar.com/frontend/assets/no-image.png',
    },
    s3_logo_key: 'companies/e96d453b-a752-4f3f-936f-409c8c735b18.png',
    s3_cover_key: null,
    country: {
      id: 150,
      id_currency: 17,
      name: 'Brasil',
      name_en: 'Brasil',
      id_continent: 8,
      status: 1,
      code: 'br',
      unit: 'km',
      auction_tax: 0.1,
      npo_tax: 0.1,
      user_tax: 0.075,
      reseller_tax: 0.01,
      donation_tax: 0.05,
      twilio_alpha_support: 0,
      bank_transfer_format: null,
      dateAdded: '2019-04-24 17:06:04',
      currency: {
        id: 17,
        name: 'Brazilian Real',
        small: 'BRL',
        value: '0.179',
        symbol: 'R$',
        status: true,
        lastUpdate: '2020-10-15 12:00:26',
      },
    },
    brands: [
      {
        company_id: 1,
        cover:
          'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/cover/6bbc6c69-9562-49a0-a01a-c5ccd921666e.jpeg',
        cover_thumbs: {
          detail:
            'https://cdn.testesolidar.com/brands/cover/6bbc6c69-9562-49a0-a01a-c5ccd921666e-DETAIL.jpeg',
          standard:
            'https://cdn.testesolidar.com/brands/cover/6bbc6c69-9562-49a0-a01a-c5ccd921666e-STANDARD.jpeg',
        },
        dateAdded: '2017-09-06 11:03:40',
        description:
          'O Rock in Rio assumiu o compromisso de plantar 1 milhão de árvores em áreas desmatadas na região do Xingu. Com a ajuda de parceiros e do público, chegamos a quase 4 milhões de árvores e iniciamos o plantio. ↵↵Os artistas do festival entraram no ritmo também e, com a sua ajuda, podemos fazer esse número crescer ainda mais. Faça a sua parte, participe para concorrer a prêmios incríveis, convide os amigos, compartilhe, divulgue, espalhe a notícia e doe. Pode ter certeza de que sua doação vai se transformar em sementes e encontrar terreno fértil para fazer a diferença por um mundo melhor.1237',
        description_en:
          'Duis quis nibh ipsum. Etiam vestibulum mauris quis iaculis tincidunt. Proin cursus, sapien eu pellentesque lacinia, diam nulla imperdiet ligula, sed convallis nisi erat quis lectus.1237',
        id: 1,
        lastUpdate: '2020-11-06 15:25:12',
        logo: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e.png',
        logo_thumbs: {
          detail:
            'https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-DETAIL.png',
          standard:
            'https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-STANDARD.png',
          thumb:
            'https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-THUMB.png',
        },
        name: 'Amazonia Live change777',
        s3_cover_key: 'brands/cover/6bbc6c69-9562-49a0-a01a-c5ccd921666e.jpeg',
        s3_logo_key: 'brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e.png',
        share_buttons: 1,
        status: 'A',
        streamimage: 'amazons3',
        username: 'teste13',
      },
    ],
    currency: {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: '1.172',
      symbol: '€',
      status: true,
      lastUpdate: '2020-10-15 12:00:11',
    },
  },
  images: [
    {
      id: 56,
      crowdfunding_id: 44,
      image:
        'crowdfundings/html-color-codes-color-tutorials-hero-00e10b1f-aa0efdbd-ca28-4489-b3d6-d082cfedd5da.jpg',
    },
  ],
  currency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: '1.172',
    symbol: '€',
    status: true,
    lastUpdate: '2020-10-15 12:00:11',
  },
  sub_category: {
    id: 13,
    category_id: 6,
    name: 'Tablets',
    name_en: 'Tablets',
    info: null,
    status: 'A',
    dateAdded: '2014-07-08 10:25:28',
    category: {
      id: 6,
      name: 'Eletrónica',
      name_en: 'Electronic',
      info: null,
      status: 'A',
      css_classes: 'categ-electronics',
      dateAdded: '2014-07-07 10:36:05',
    },
  },
  projects: [],
};

const propsEnv = {
  cdn_static_url: 'https://static.esolidar.com',
};

describe('CrowdfundingHeader', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <CrowdfundingHeaderRigth
          campaignTitle={() => 'title test'}
          campaign={propsCampaign}
          env={propsEnv}
        />
      </IntlProvider>
    );
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
  });

  it('should exist a title', () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <CrowdfundingHeaderRigth
          campaignTitle={() => 'title test'}
          campaign={propsCampaign}
          env={propsEnv}
        />
      </IntlProvider>
    );
    const title = <h2 className="title-campaign">title test</h2>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('should exist a number of donations', () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <CrowdfundingHeaderRigth
          campaignTitle={() => 'title test'}
          campaign={propsCampaign}
          env={propsEnv}
        />
      </IntlProvider>
    );
    expect(wrapper.find('.total-donations-value.col-sm-12').text()).toEqual('2');
  });
});

/* global expect */
/* global jest */
/* global beforeAll */
/* global afterAll */
import 'regenerator-runtime/runtime';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StripeCreditCard from '../StripeCreditCard';

configure({ adapter: new Adapter() });

const jsonData = {
  products: [{
    currency: {
      id: 1, name: 'Euro', small: 'EUR', value: '1.187', symbol: '€', status: true, lastUpdate: '2020-11-06 12:00:07',
    },
    id: 80,
    campaign: {
      id: 76,
      user_id: 51792,
      institution_id: null,
      company_id: 1,
      sub_category_id: null,
      product_id: 80,
      title: 'Local Campanha Rocha',
      title_en: null,
      tags: null,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description_en: null,
      video: null,
      reward: 0,
      reward_description: null,
      goal: 1000,
      minimum_contribution: 1,
      currency_id: 1,
      start_date: '2020-10-30 00:00:00',
      end_date: '2020-11-27 00:00:00',
      timezone: 'Europe/Lisbon',
      position: 0,
      recipient_visible: 1,
      status: 'approved',
      esolidar_list: 0,
      updated_at: '2020-11-02 17:22:09',
      created_at: '2020-10-30 14:15:09',
      contributes_count: 3,
      contributes_sum: 17,
      product: {
        id: 80,
        payment_method_id: 11,
        type: 'crowdfunding',
        updated_at: '2020-11-02 17:22:09',
        created_at: '2020-10-30 14:15:09',
        payment_method: {
          id: 11, paypal: 1, stripe: 1, sibs_checkout: 0, sibs_mbway: 0, sibs_multibanco: 0, sibs_directdebit_sepa: 0, sibs_cc: 0, utrust: 0, updated_at: '2020-04-09 08:34:52', created_at: '2020-04-09 08:34:52',
        },
      },
      institution: null,
      company: {
        id: 1,
        name: 'Webankor (eSolidar)',
        logo: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/companies/e96d453b-a752-4f3f-936f-409c8c735b18.png',
        country_id: 150,
        currency_id: 1,
        thumbs: {
          detail: 'https://cdn.testesolidar.com/companies/e96d453b-a752-4f3f-936f-409c8c735b18-DETAIL.png',
          thumb: 'https://cdn.testesolidar.com/companies/e96d453b-a752-4f3f-936f-409c8c735b18-THUMB.png',
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
            id: 17, name: 'Brazilian Real', small: 'BRL', value: '0.181', symbol: 'R$', status: true, lastUpdate: '2020-11-06 12:00:23',
          },
        },
        currency: {
          id: 1, name: 'Euro', small: 'EUR', value: '1.187', symbol: '€', status: true, lastUpdate: '2020-11-06 12:00:07',
        },
      },
      images: [{ id: 263, crowdfunding_id: 76, image: 'crowdfundings/torre-4c4a5104-dec2-4031-a0f9-6cee1d3259fe.jpg' }],
      currency: {
        id: 1, name: 'Euro', small: 'EUR', value: '1.187', symbol: '€', status: true, lastUpdate: '2020-11-06 12:00:07',
      },
      sub_category: null,
      projects: [{
        id: 64,
        whitelabel_id: 5,
        category_id: 17,
        description: 'Project Rocha',
        cover: null,
        title: 'Project Rocha',
        user_id: 51792,
        laravel_through_key: 76,
        ods: [{
          id: 1, ods_id: 1, tag_name: 'ods-1', status: true, updated_at: '2020-02-05 17:26:34', created_at: '2020-02-05 17:26:27', laravel_through_key: 64, name: '1-ods-1',
        }],
        user: {
          id: 51792,
          fb_id: null,
          institution_id: null,
          currency: {
            id: 1, name: 'Euro', small: 'EUR', value: '1.187', symbol: '€', status: true, lastUpdate: '2020-11-06 12:00:07',
          },
          country: 208,
          language: {
            id: 1, name: 'en', translate: 'English', status: 1, locale: 'en_US', dateAdded: '2015-01-06 16:58:22',
          },
          firstName: 'Miguel',
          lastName: 'Rocha',
          email: 'rocha@esolidar.com',
          fb_email: null,
          fb_email_confirmed: 0,
          code: '629540c1-3818-4f13-9e11-53d0aae03883',
          type: 'user',
          default_institution_id: null,
          auth_facebook: 0,
          auth_email: 1,
          streamImage: 'amazons3',
          image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/users/51792/1601463876.jpg?v=1601463877',
          summary: 'Front End Developer',
          nif: 'null',
          receipt: 0,
          mobile_phone: '+351919552199',
          link: null,
          birthday: '1983-11-30',
          gender: 'male',
          hometown: null,
          location: 'Porto, Portugal',
          locale: 'en_US',
          verified: 0,
          subscribe: 1,
          notifications: 1,
          perms: 0,
          status: 'A',
          paypal_mail: null,
          sent_address: null,
          real_address: 'Rua do Porto',
          longitude: '0',
          latitude: '0',
          free_taxes: 0,
          thumb: '0',
          sync_friends: 0,
          sync_likes: 0,
          private_beta: 0,
          import_bewarket: 0,
          ws_import: 0,
          only_mysells: 1,
          is_admin: 1,
          deauthorize_times: 0,
          invite_friends: null,
          remember_token: null,
          updatedTime: '2020-09-22 03:09:51',
          lastUpdate: '2020-11-09T11:00:41.000000Z',
          lastLogin: '2020-11-09 11:11:41',
          dateAdded: '2020-09-22T15:57:51.000000Z',
          thumbs: {
            original: 'https://cdn.testesolidar.com/users/51792/1601463876.jpg?v=1601463877',
            standard: 'https://cdn.testesolidar.com/users/51792/1601463876-STANDARD.jpg',
            thumb: 'https://cdn.testesolidar.com/users/51792/1601463876-THUMB.jpg',
          },
          work_email: [],
          name: 'Miguel Rocha',
          s3_key: 'users/51792/1601463876.jpg?v=1601463877',
          institution: null,
          phones: [{
            id: 134, user_id: 51792, phone: '+351919552199', code: '6121', main: 1, twilio_sid: 'SM089ce92c633246ccb8da10ce994c67d4', verified: 1, updatedDate: '2020-09-30 11:11:05', dateAdded: '2020-09-30 11:10:45',
          }],
        },
        images: [{
          id: 177,
          project_id: 64,
          streamImage: 'amazons3',
          image: 'whitelabel/5/projects/dcd506a5-7140-4e31-98be-74099a25609d.jpg',
          image_type: 'jpg',
          image_size: 603719,
          default: 1,
          position: 1,
          updated_at: '2020-10-28 14:20:07',
          created_at: '2020-10-28 14:19:30',
        }],
        whitelabel_config: { id: 5, subdomain: 'whitelabel.esolidar.local', domain: null },
      }, {
        id: 65,
        whitelabel_id: 5,
        category_id: 17,
        description: 'Descrição Projecto 2',
        cover: null,
        title: 'Projecto Rocha 2',
        user_id: 51792,
        laravel_through_key: 76,
        ods: [{
          id: 1, ods_id: 1, tag_name: 'ods-1', status: true, updated_at: '2020-02-05 17:26:34', created_at: '2020-02-05 17:26:27', laravel_through_key: 65, name: '1-ods-1',
        }, {
          id: 6, ods_id: 6, tag_name: 'ods-6', status: true, updated_at: '2020-02-05 18:03:39', created_at: '2020-02-05 18:03:39', laravel_through_key: 65, name: '6-ods-6',
        }],
        user: {
          id: 51792,
          fb_id: null,
          institution_id: null,
          currency: {
            id: 1, name: 'Euro', small: 'EUR', value: '1.187', symbol: '€', status: true, lastUpdate: '2020-11-06 12:00:07',
          },
          country: 208,
          language: {
            id: 1, name: 'en', translate: 'English', status: 1, locale: 'en_US', dateAdded: '2015-01-06 16:58:22',
          },
          firstName: 'Miguel',
          lastName: 'Rocha',
          email: 'rocha@esolidar.com',
          fb_email: null,
          fb_email_confirmed: 0,
          code: '629540c1-3818-4f13-9e11-53d0aae03883',
          type: 'user',
          default_institution_id: null,
          auth_facebook: 0,
          auth_email: 1,
          streamImage: 'amazons3',
          image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/users/51792/1601463876.jpg?v=1601463877',
          summary: 'Front End Developer',
          nif: 'null',
          receipt: 0,
          mobile_phone: '+351919552199',
          link: null,
          birthday: '1983-11-30',
          gender: 'male',
          hometown: null,
          location: 'Porto, Portugal',
          locale: 'en_US',
          verified: 0,
          subscribe: 1,
          notifications: 1,
          perms: 0,
          status: 'A',
          paypal_mail: null,
          sent_address: null,
          real_address: 'Rua do Porto',
          longitude: '0',
          latitude: '0',
          free_taxes: 0,
          thumb: '0',
          sync_friends: 0,
          sync_likes: 0,
          private_beta: 0,
          import_bewarket: 0,
          ws_import: 0,
          only_mysells: 1,
          is_admin: 1,
          deauthorize_times: 0,
          invite_friends: null,
          remember_token: null,
          updatedTime: '2020-09-22 03:09:51',
          lastUpdate: '2020-11-09T11:00:41.000000Z',
          lastLogin: '2020-11-09 11:11:41',
          dateAdded: '2020-09-22T15:57:51.000000Z',
          thumbs: {
            original: 'https://cdn.testesolidar.com/users/51792/1601463876.jpg?v=1601463877',
            standard: 'https://cdn.testesolidar.com/users/51792/1601463876-STANDARD.jpg',
            thumb: 'https://cdn.testesolidar.com/users/51792/1601463876-THUMB.jpg',
          },
          work_email: [],
          name: 'Miguel Rocha',
          s3_key: 'users/51792/1601463876.jpg?v=1601463877',
          institution: null,
          phones: [{
            id: 134, user_id: 51792, phone: '+351919552199', code: '6121', main: 1, twilio_sid: 'SM089ce92c633246ccb8da10ce994c67d4', verified: 1, updatedDate: '2020-09-30 11:11:05', dateAdded: '2020-09-30 11:10:45',
          }],
        },
        images: [{
          id: 178,
          project_id: 65,
          streamImage: 'amazons3',
          image: 'whitelabel/5/projects/8f1ef3bd-5231-4389-b7fb-7d5bdc1d3830.jpg',
          image_type: 'jpg',
          image_size: 81735,
          default: 1,
          position: 1,
          updated_at: '2020-10-29 17:41:31',
          created_at: '2020-10-29 17:40:39',
        }],
        whitelabel_config: { id: 5, subdomain: 'whitelabel.esolidar.local', domain: null },
      }],
    },
    type: 'crowdfunding',
    amount: 15,
    quantity: 1,
    extra: { hidden: '1', message: '', checked: 1 },
  }],
};

beforeAll(() => {
  localStorage.setItem('order', JSON.stringify(jsonData));
});

afterAll(() => {
  localStorage.clear();
});

const props = {
  loadingStripe: false,
  total: 100,
  currencyId: 1,
  updateState: jest.fn(),
  postOrder: jest.fn(),
  order: {
    request_time: 1696,
    code: 200,
    data: {
      method: 'stripe',
      status: 'SUCCESS',
      response: {
        payment_intent_id: 'pi_1HlXrJJw59WC3qljr83Kk57L',
        payment_method_id: 'pm_1HlXrIJw59WC3qljUlg25gX1',
        merchantTransactionId: 519,
        status: 'succeeded',
      },
    },
  },
  env: {
    stripe: {
      publishableKey: 'pk_test_k1GFy6gdCeEfB8yfQWVWEQvZ',
      publishableKeyBr: 'pk_test_Og1YsCuVnh08BMh7gNbBKZ9z00NpxiYELH',
    },
  },
  state: {
    order: {
      products: [{
        extra: {
          checked: 1,
        },
        currency: {
          id: 1,
        },
      }],
    },
  },
};

describe('StripeCreditCard component', () => {
  it('renders StripeCreditCard correctly', () => {
    const component = shallow(<StripeCreditCard {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders StripeCreditCard order prop succeded', () => {
    const component = shallow(<StripeCreditCard {...props} />);
    const prevProps = {
      order: {},
    };

    component.instance().componentDidUpdate(prevProps);
    // eslint-disable-next-line quotes
    expect(localStorage.order).toEqual("{ \"products\": []}");
    expect(window.location.search).toEqual('?checkout_step=4');
  });

  it('calls handleChange', () => {
    const component = shallow(<StripeCreditCard {...props} />);
    const error = {
      code: 'invalid_number',
      message: 'O número do seu cartão é inválido.',
      type: 'validation_error',
    };

    component.instance().handleChange({ error });
    expect(component.state('errors')).toEqual({
      invalid_number: 'O número do seu cartão é inválido.',
    });
  });

  it('calls submit', () => {
    const component = shallow(<StripeCreditCard {...props} />);

    component.instance().submit();
    expect(component.state('errors')).toEqual({});
  });

  it('calls submitStripePayment', () => {
    const component = shallow(<StripeCreditCard {...props} />);
    const data = {
      method: 'stripe',
      action: 'create',
      currency_id: 1,
      method_info: {
        id: 'pm_1HlcPMJw59WC3qlja3ZyiDOU',
        card: {
          brand: 'visa',
          checks: {
            address_line1_check: null, address_postal_code_check: null, cvc_check: null,
          },
          country: 'FR',
          exp_month: 12,
          exp_year: 2021,
          funding: 'credit',
          generated_from: null,
          last4: '3155',
          networks: { available: ['visa'], preferred: null },
          three_d_secure_usage: { supported: true },
          wallet: null,
        },
        livemode: false,
        object: 'payment_method',
      },
      products: [{
        currency: {
          id: 1, name: 'Euro', small: 'EUR', value: '1.188', symbol: '€', status: true, lastUpdate: '2020-11-09 12:00:03',
        },
        id: 80,
        campaign: {
          id: 76,
          user_id: 51792,
          institution_id: null,
          company_id: 1,
          sub_category_id: null,
          product_id: 80,
          title: 'Local Campanha Rocha',
          title_en: null,
          tags: null,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          description_en: null,
          video: null,
          reward: 0,
          reward_description: null,
          goal: 1000,
          minimum_contribution: 1,
          currency_id: 1,
          start_date: '2020-10-30 00:00:00',
          end_date: '2020-11-27 00:00:00',
          timezone: 'Europe/Lisbon',
          position: 0,
          recipient_visible: 1,
          status: 'approved',
          esolidar_list: 0,
          updated_at: '2020-11-02 17:22:09',
          created_at: '2020-10-30 14:15:09',
          contributes_count: 10,
          contributes_sum: 80,
          product: {
            id: 80,
            payment_method_id: 11,
            type: 'crowdfunding',
            updated_at: '2020-11-02 17:22:09',
            created_at: '2020-10-30 14:15:09',
            payment_method: {
              id: 11, paypal: 1, stripe: 1, sibs_checkout: 0, sibs_mbway: 0, sibs_multibanco: 0, sibs_directdebit_sepa: 0, sibs_cc: 0, utrust: 0, updated_at: '2020-04-09 08:34:52', created_at: '2020-04-09 08:34:52',
            },
          },
          institution: null,
          company: {
            id: 1,
            name: 'Webankor (eSolidar)',
            logo: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/companies/e96d453b-a752-4f3f-936f-409c8c735b18.png',
            country_id: 150,
            currency_id: 1,
            thumbs: {
              detail: 'https://cdn.testesolidar.com/companies/e96d453b-a752-4f3f-936f-409c8c735b18-DETAIL.png',
              thumb: 'https://cdn.testesolidar.com/companies/e96d453b-a752-4f3f-936f-409c8c735b18-THUMB.png',
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
                id: 17, name: 'Brazilian Real', small: 'BRL', value: '0.186', symbol: 'R$', status: true, lastUpdate: '2020-11-09 12:00:18',
              },
            },
            currency: {
              id: 1, name: 'Euro', small: 'EUR', value: '1.188', symbol: '€', status: true, lastUpdate: '2020-11-09 12:00:03',
            },
          },
          images: [{ id: 263, crowdfunding_id: 76, image: 'crowdfundings/torre-4c4a5104-dec2-4031-a0f9-6cee1d3259fe.jpg' }],
          currency: {
            id: 1, name: 'Euro', small: 'EUR', value: '1.188', symbol: '€', status: true, lastUpdate: '2020-11-09 12:00:03',
          },
          sub_category: null,
          projects: [{
            id: 64,
            whitelabel_id: 5,
            category_id: 17,
            description: 'Project Rocha',
            cover: null,
            title: 'Project Rocha',
            user_id: 51792,
            laravel_through_key: 76,
            ods: [{
              id: 1, ods_id: 1, tag_name: 'ods-1', status: true, updated_at: '2020-02-05 17:26:34', created_at: '2020-02-05 17:26:27', laravel_through_key: 64, name: '1-ods-1',
            }],
            user: {
              id: 51792,
              fb_id: null,
              institution_id: null,
              currency: {
                id: 1, name: 'Euro', small: 'EUR', value: '1.188', symbol: '€', status: true, lastUpdate: '2020-11-09 12:00:03',
              },
              country: 208,
              language: {
                id: 1, name: 'en', translate: 'English', status: 1, locale: 'en_US', dateAdded: '2015-01-06 16:58:22',
              },
              firstName: 'Miguel',
              lastName: 'Rocha',
              email: 'rocha@esolidar.com',
              fb_email: null,
              fb_email_confirmed: 0,
              code: '629540c1-3818-4f13-9e11-53d0aae03883',
              type: 'user',
              default_institution_id: null,
              auth_facebook: 0,
              auth_email: 1,
              streamImage: 'amazons3',
              image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/users/51792/1601463876.jpg?v=1601463877',
              summary: 'Front End Developer',
              nif: 'null',
              receipt: 0,
              mobile_phone: '+351919552199',
              link: null,
              birthday: '1983-11-30',
              gender: 'male',
              hometown: null,
              location: 'Porto, Portugal',
              locale: 'en_US',
              verified: 0,
              subscribe: 1,
              notifications: 1,
              perms: 0,
              status: 'A',
              paypal_mail: null,
              sent_address: null,
              real_address: 'Rua do Porto',
              longitude: '0',
              latitude: '0',
              free_taxes: 0,
              thumb: '0',
              sync_friends: 0,
              sync_likes: 0,
              private_beta: 0,
              import_bewarket: 0,
              ws_import: 0,
              only_mysells: 1,
              is_admin: 1,
              deauthorize_times: 0,
              invite_friends: null,
              remember_token: null,
              updatedTime: '2020-09-22 03:09:51',
              lastUpdate: '2020-11-09T14:59:05.000000Z',
              lastLogin: '2020-11-09 02:11:05',
              dateAdded: '2020-09-22T15:57:51.000000Z',
              thumbs: {
                original: 'https://cdn.testesolidar.com/users/51792/1601463876.jpg?v=1601463877',
                standard: 'https://cdn.testesolidar.com/users/51792/1601463876-STANDARD.jpg',
                thumb: 'https://cdn.testesolidar.com/users/51792/1601463876-THUMB.jpg',
              },
              work_email: [],
              name: 'Miguel Rocha',
              s3_key: 'users/51792/1601463876.jpg?v=1601463877',
              institution: null,
              phones: [{
                id: 134, user_id: 51792, phone: '+351919552199', code: '6121', main: 1, twilio_sid: 'SM089ce92c633246ccb8da10ce994c67d4', verified: 1, updatedDate: '2020-09-30 11:11:05', dateAdded: '2020-09-30 11:10:45',
              }],
            },
            images: [{
              id: 177,
              project_id: 64,
              streamImage: 'amazons3',
              image: 'whitelabel/5/projects/dcd506a5-7140-4e31-98be-74099a25609d.jpg',
              image_type: 'jpg',
              image_size: 603719,
              default: 1,
              position: 1,
              updated_at: '2020-10-28 14:20:07',
              created_at: '2020-10-28 14:19:30',
            }],
            whitelabel_config: { id: 5, subdomain: 'whitelabel.esolidar.local', domain: null },
          }, {
            id: 65,
            whitelabel_id: 5,
            category_id: 17,
            description: 'Descrição Projecto 2',
            cover: null,
            title: 'Projecto Rocha 2',
            user_id: 51792,
            laravel_through_key: 76,
            ods: [{
              id: 1, ods_id: 1, tag_name: 'ods-1', status: true, updated_at: '2020-02-05 17:26:34', created_at: '2020-02-05 17:26:27', laravel_through_key: 65, name: '1-ods-1',
            }, {
              id: 6, ods_id: 6, tag_name: 'ods-6', status: true, updated_at: '2020-02-05 18:03:39', created_at: '2020-02-05 18:03:39', laravel_through_key: 65, name: '6-ods-6',
            }],
            user: {
              id: 51792,
              fb_id: null,
              institution_id: null,
              currency: {
                id: 1, name: 'Euro', small: 'EUR', value: '1.188', symbol: '€', status: true, lastUpdate: '2020-11-09 12:00:03',
              },
              country: 208,
              language: {
                id: 1, name: 'en', translate: 'English', status: 1, locale: 'en_US', dateAdded: '2015-01-06 16:58:22',
              },
              firstName: 'Miguel',
              lastName: 'Rocha',
              email: 'rocha@esolidar.com',
              fb_email: null,
              fb_email_confirmed: 0,
              code: '629540c1-3818-4f13-9e11-53d0aae03883',
              type: 'user',
              default_institution_id: null,
              auth_facebook: 0,
              auth_email: 1,
              streamImage: 'amazons3',
              image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/users/51792/1601463876.jpg?v=1601463877',
              summary: 'Front End Developer',
              nif: 'null',
              receipt: 0,
              mobile_phone: '+351919552199',
              link: null,
              birthday: '1983-11-30',
              gender: 'male',
              hometown: null,
              location: 'Porto, Portugal',
              locale: 'en_US',
              verified: 0,
              subscribe: 1,
              notifications: 1,
              perms: 0,
              status: 'A',
              paypal_mail: null,
              sent_address: null,
              real_address: 'Rua do Porto',
              longitude: '0',
              latitude: '0',
              free_taxes: 0,
              thumb: '0',
              sync_friends: 0,
              sync_likes: 0,
              private_beta: 0,
              import_bewarket: 0,
              ws_import: 0,
              only_mysells: 1,
              is_admin: 1,
              deauthorize_times: 0,
              invite_friends: null,
              remember_token: null,
              updatedTime: '2020-09-22 03:09:51',
              lastUpdate: '2020-11-09T14:59:05.000000Z',
              lastLogin: '2020-11-09 02:11:05',
              dateAdded: '2020-09-22T15:57:51.000000Z',
              thumbs: {
                original: 'https://cdn.testesolidar.com/users/51792/1601463876.jpg?v=1601463877',
                standard: 'https://cdn.testesolidar.com/users/51792/1601463876-STANDARD.jpg',
                thumb: 'https://cdn.testesolidar.com/users/51792/1601463876-THUMB.jpg',
              },
              work_email: [],
              name: 'Miguel Rocha',
              s3_key: 'users/51792/1601463876.jpg?v=1601463877',
              institution: null,
              phones: [{
                id: 134, user_id: 51792, phone: '+351919552199', code: '6121', main: 1, twilio_sid: 'SM089ce92c633246ccb8da10ce994c67d4', verified: 1, updatedDate: '2020-09-30 11:11:05', dateAdded: '2020-09-30 11:10:45',
              }],
            },
            images: [{
              id: 178,
              project_id: 65,
              streamImage: 'amazons3',
              image: 'whitelabel/5/projects/8f1ef3bd-5231-4389-b7fb-7d5bdc1d3830.jpg',
              image_type: 'jpg',
              image_size: 81735,
              default: 1,
              position: 1,
              updated_at: '2020-10-29 17:41:31',
              created_at: '2020-10-29 17:40:39',
            }],
            whitelabel_config: { id: 5, subdomain: 'whitelabel.esolidar.local', domain: null },
          }],
        },
        type: 'crowdfunding',
        amount: 8,
        quantity: 1,
        extra: { hidden: 0, message: '', checked: 1 },
      }],
      receipt: 0,
      invoice: { nif: '', invoice_address: '' },
    };
    component.instance().submitStripePayment(data);
    expect(component.state('isLoadingPayment')).toBe(true);
  });

  it('calls updateState', () => {
    const component = shallow(<StripeCreditCard {...props} />);

    component.instance().updateState({ name: 'name' });
    expect(component.state('name')).toEqual('name');
  });
});

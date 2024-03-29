import React from 'react';
import { configure, mount } from 'enzyme';
import translation from '@esolidar/i18n/projects/toolkit/en';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { IntlProvider } from 'react-intl';
import Reviews from '../index';

configure({ adapter: new Adapter() });

const onChange = jest.fn();

const props = {
  averageRate: 3,
  companyId: 1,
  errors: {},
  myUser: {
    id: 9,
    firstName: 'Joel',
    lastName: 'Calheiros',
    image: 'https://static.esolidar.com/users/9/1590415243.jpg',
    streamImage: 'amazons3',
    language: {
      id: 2,
      name: 'pt',
      translate: 'Português (PT)',
      status: 1,
      locale: 'pt_PT',
      dateAdded: '2015-02-24 11:02:06',
    },
    currency: {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: '1.091',
      symbol: '€',
      status: true,
      lastUpdate: '2020-05-22 12:55:58',
    },
    thumbs: {
      original: 'https://cdn.testesolidar.com/users/9/1590415243.jpg',
      standard: 'https://cdn.testesolidar.com/users/9/1590415243-STANDARD.jpg',
      thumb: 'https://cdn.testesolidar.com/users/9/1590415243-THUMB.jpg',
    },
    work_email: [
      {
        company_id: 1,
        name: 'Joel Calheiros',
        role: 'admin',
        department: null,
        user: null,
      },
      {
        company_id: 171,
        name: 'Joel Calheiros',
        role: null,
        department: null,
        user: null,
      },
      {
        company_id: 251,
        name: 'Joel Calheiros',
        role: null,
        department: null,
        user: null,
      },
      {
        company_id: 257,
        name: 'Joel Calheiros',
        role: 'owner',
        department: null,
        user: null,
      },
      {
        company_id: 258,
        name: 'Joel Calheiros',
        role: 'owner',
        department: null,
        user: null,
      },
    ],
    name: 'Joel Calheiros',
    s3_key: 'users/9/1590415243.jpg',
    institution: null,
    phones: [
      {
        id: 77,
        user_id: 9,
        phone: '+351965790981',
        code: '7597',
        main: 1,
        twilio_sid: 'SM05d868fe86a44bd3b49cc2d11bc67ff2',
        verified: 1,
        updatedDate: '2016-10-14 13:46:02',
        dateAdded: '2016-10-14 14:45:51',
      },
      {
        id: 111,
        user_id: 9,
        phone: '+351965790981',
        code: '5078',
        main: 0,
        twilio_sid: 'SM9d44c07828f74ddb889b1cedaab10856',
        verified: 0,
        updatedDate: '2017-02-06 13:31:59',
        dateAdded: '2017-02-06 13:31:59',
      },
      {
        id: 119,
        user_id: 9,
        phone: '351965790981',
        code: '8935',
        main: 0,
        twilio_sid: 'SMb29401a491154147b9a78e454fd9cdbd',
        verified: 1,
        updatedDate: '2019-08-26 09:44:12',
        dateAdded: '2019-08-06 11:06:36',
      },
      {
        id: 131,
        user_id: 9,
        phone: '+351965790981',
        code: '1562',
        main: 0,
        twilio_sid: 'SMe27d1239bc1f4ab585040284d1f10e4e',
        verified: 1,
        updatedDate: '2019-09-17 15:22:32',
        dateAdded: '2019-09-17 16:20:50',
      },
      {
        id: 132,
        user_id: 9,
        phone: '+351965790981',
        code: '5530',
        main: 0,
        twilio_sid: 'SM3c2df52d426d45b3900f3678c3dab485',
        verified: 1,
        updatedDate: '2019-09-18 13:32:29',
        dateAdded: '2019-09-18 14:32:02',
      },
    ],
  },
  review: {
    rate: 3,
    text: 'Esta review é um teste',
  },
  onChangeRate: onChange,
  onChangeText: onChange,
  onClickCancel: onChange,
  onClickEdit: onChange,
  otherReviewsList: [
    {
      id: 2,
      user_id: 51592,
      project_id: 31,
      rate: 2,
      review: null,
      updated_at: '2020-05-27 08:41:28',
      created_at: '2020-05-27 08:40:37',
      user: {
        id: 51592,
        firstName: 'António',
        lastName: 'Andrade',
        image: null,
        streamImage: 'local',
        language: {
          id: 3,
          name: 'br',
          translate: 'Português (BR)',
          status: 1,
          locale: 'pt_BR',
          dateAdded: '2015-02-24 11:02:09',
        },
        currency: {
          id: 1,
          name: 'Euro',
          small: 'EUR',
          value: '1.091',
          symbol: '€',
          status: true,
          lastUpdate: '2020-05-22 12:55:58',
        },
        thumbs: {
          original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
        },
        work_email: [
          {
            company_id: 1,
            name: 'Antonio Esolidar',
            role: 'admin',
            department: null,
            user: null,
          },
        ],
        name: 'António Andrade',
        s3_key: null,
        institution: null,
        phones: [
          {
            id: 120,
            user_id: 51592,
            phone: '+351965790981',
            code: '4285',
            main: 0,
            twilio_sid: 'SMc9d73c2381fa44568b2429ed4d0d9daf',
            verified: 0,
            updatedDate: '2019-08-06 16:01:34',
            dateAdded: '2019-08-06 17:01:34',
          },
          {
            id: 122,
            user_id: 51592,
            phone: '+5511997477070',
            code: '6671',
            main: 0,
            twilio_sid: 'SMc7da2e6f0d394a6e8beeb52057e86083',
            verified: 1,
            updatedDate: '2019-08-06 16:05:52',
            dateAdded: '2019-08-06 17:05:22',
          },
        ],
      },
    },
    {
      id: 3,
      user_id: 51592,
      project_id: 31,
      rate: 3,
      review:
        'Curabitur nec nunc et lacus hendrerit finibus sit amet vel dui. Mauris vehicula, ante eget varius porttitor, enim massa accumsan magna.',
      updated_at: '2020-05-27 08:41:28',
      created_at: '2020-05-27 08:40:37',
      user: {
        id: 51592,
        firstName: 'António',
        lastName: 'Andrade',
        image: null,
        streamImage: 'local',
        language: {
          id: 3,
          name: 'br',
          translate: 'Português (BR)',
          status: 1,
          locale: 'pt_BR',
          dateAdded: '2015-02-24 11:02:09',
        },
        currency: {
          id: 1,
          name: 'Euro',
          small: 'EUR',
          value: '1.091',
          symbol: '€',
          status: true,
          lastUpdate: '2020-05-22 12:55:58',
        },
        thumbs: {
          original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
          thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
        },
        work_email: [
          {
            company_id: 1,
            name: 'Antonio Esolidar',
            role: 'admin',
            department: null,
            user: null,
          },
        ],
        name: 'António Andrade',
        s3_key: null,
        institution: null,
        phones: [
          {
            id: 120,
            user_id: 51592,
            phone: '+351965790981',
            code: '4285',
            main: 0,
            twilio_sid: 'SMc9d73c2381fa44568b2429ed4d0d9daf',
            verified: 0,
            updatedDate: '2019-08-06 16:01:34',
            dateAdded: '2019-08-06 17:01:34',
          },
          {
            id: 122,
            user_id: 51592,
            phone: '+5511997477070',
            code: '6671',
            main: 0,
            twilio_sid: 'SMc7da2e6f0d394a6e8beeb52057e86083',
            verified: 1,
            updatedDate: '2019-08-06 16:05:52',
            dateAdded: '2019-08-06 17:05:22',
          },
        ],
      },
    },
  ],
  serverlessResizeImage: 'https://image.testesolidar.com',
  showEditReviewForm: false,
  submitReview: onChange,
  texts: {
    averageTitle: 'Avaliação média',
    myReview: 'A minha avaliação',
    intro: 'Faça uma avaliação do projeto',
    reviewTitle: 'Outras avaliações',
    myReviewTitle: 'Avaliação de',
    editReviewButton: 'Editar',
    writeReview: 'Escreva uma avaliação geral deste projeto',
    updateLabel: 'Atualizar',
    saveLabel: 'Gravar',
    cancel: 'Cancelar',
    noReviews: 'Este projeto ainda não tem outras avaliações',
  },
  totalReviews: 3,
  userReview: {
    id: 1,
    user_id: 9,
    project_id: 31,
    rate: 4,
    review: null,
    updated_at: '2020-05-26 16:51:40',
    created_at: '2020-05-26 16:49:30',
    user: {
      id: 9,
      firstName: 'Joel',
      lastName: 'Calheiros',
      image: 'https://static.esolidar.com/users/9/1590415243.jpg',
      streamImage: 'amazons3',
      language: {
        id: 2,
        name: 'pt',
        translate: 'Português (PT)',
        status: 1,
        locale: 'pt_PT',
        dateAdded: '2015-02-24 11:02:06',
      },
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: '1.091',
        symbol: '€',
        status: true,
        lastUpdate: '2020-05-22 12:55:58',
      },
      thumbs: {
        original: 'https://cdn.testesolidar.com/users/9/1590415243.jpg',
        standard: 'https://cdn.testesolidar.com/users/9/1590415243-STANDARD.jpg',
        thumb: 'https://cdn.testesolidar.com/users/9/1590415243-THUMB.jpg',
      },
      work_email: [
        {
          company_id: 1,
          name: 'Joel Calheiros',
          role: 'admin',
          department: null,
          user: null,
        },
        {
          company_id: 171,
          name: 'Joel Calheiros',
          role: null,
          department: null,
          user: null,
        },
        {
          company_id: 251,
          name: 'Joel Calheiros',
          role: null,
          department: null,
          user: null,
        },
        {
          company_id: 257,
          name: 'Joel Calheiros',
          role: 'owner',
          department: null,
          user: null,
        },
        {
          company_id: 258,
          name: 'Joel Calheiros',
          role: 'owner',
          department: null,
          user: null,
        },
      ],
      name: 'Joel Calheiros',
      s3_key: 'users/9/1590415243.jpg',
      institution: null,
      phones: [
        {
          id: 77,
          user_id: 9,
          phone: '+351965790981',
          code: '7597',
          main: 1,
          twilio_sid: 'SM05d868fe86a44bd3b49cc2d11bc67ff2',
          verified: 1,
          updatedDate: '2016-10-14 13:46:02',
          dateAdded: '2016-10-14 14:45:51',
        },
        {
          id: 111,
          user_id: 9,
          phone: '+351965790981',
          code: '5078',
          main: 0,
          twilio_sid: 'SM9d44c07828f74ddb889b1cedaab10856',
          verified: 0,
          updatedDate: '2017-02-06 13:31:59',
          dateAdded: '2017-02-06 13:31:59',
        },
        {
          id: 119,
          user_id: 9,
          phone: '351965790981',
          code: '8935',
          main: 0,
          twilio_sid: 'SMb29401a491154147b9a78e454fd9cdbd',
          verified: 1,
          updatedDate: '2019-08-26 09:44:12',
          dateAdded: '2019-08-06 11:06:36',
        },
        {
          id: 131,
          user_id: 9,
          phone: '+351965790981',
          code: '1562',
          main: 0,
          twilio_sid: 'SMe27d1239bc1f4ab585040284d1f10e4e',
          verified: 1,
          updatedDate: '2019-09-17 15:22:32',
          dateAdded: '2019-09-17 16:20:50',
        },
        {
          id: 132,
          user_id: 9,
          phone: '+351965790981',
          code: '5530',
          main: 0,
          twilio_sid: 'SM3c2df52d426d45b3900f3678c3dab485',
          verified: 1,
          updatedDate: '2019-09-18 13:32:29',
          dateAdded: '2019-09-18 14:32:02',
        },
      ],
    },
  },
};

describe('Reviews component', () => {
  it('renders Reviews correctly', () => {
    const component = mount(<Reviews {...props} />);
    expect(component).toHaveLength(1);
    expect(component.find('[data-testid="average-review"]').length).toBe(1);
    expect(component.find('[data-testid="user-review"]').length).toBe(1);
    expect(component.find('[data-testid="edit-form"]').length).toBe(0);
    expect(component.find('[data-testid="rate-error"]').length).toBe(0);
    expect(component.find('[data-testid="other-review"]').length).toBe(
      props.otherReviewsList.length
    );
  });

  it('does not render average review box if there are no reviews', () => {
    const component = mount(<Reviews {...props} totalReviews={0} />);
    expect(component.find('[data-testid="average-review"]').length).toBe(0);
  });

  it('renders edit review form if "showEditReviewForm" is true', () => {
    const component = mount(
      <IntlProvider locale="en" messages={translation}>
        <Reviews {...props} showEditReviewForm={true} />
      </IntlProvider>
    );
    expect(component.find('[data-testid="edit-form"]').length).toBe(1);
  });
  it('renders "no reviews" text if "otherReviewsList" is empty', () => {
    const component = mount(<Reviews {...props} otherReviewsList={[]} />);
    expect(component.find('[data-testid="no-reviews"]').length).toBe(1);
  });
});

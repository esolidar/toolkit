import AuctionAddForm from './AuctionAddForm';
import project from '../../../__mocks__/project';
import institution from '../../../__mocks__/institution';
import company from '../../../__mocks__/company';

export default {
  title: 'Components/Auctions/AuctionAddForm',
  component: AuctionAddForm,
};

const Template = args => <AuctionAddForm {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['AuctionAddForm.test.js'],
};
Default.args = {
  esolidarList: false,
  loadingPage: false,
  action: null,
  timeZones: [],
  getInstitutions: () => {},
  institutions: {
    code: 200,
    data: {
      institutions: {
        data: [institution],
        current_page: 1,
        per_page: 1,
        total: 1,
      },
    },
  },
  showInstitutions: true,
  showProjects: true,
  showBrands: true,
  showPrivate: true,
  projectsList: {
    code: 200,
    data: {
      data: [project],
    },
  },
  getInstitutionCategories: () => {},
  institutionCategories: {},
  getProjectsList: () => {},
  getBrandsList: () => {},
  postUploadImage: () => {},
  addImages: {},
  postAuction: () => {},
  addAuction: {},
  postAuctionDeleteImage: () => {},
  brands: {},
  returnUrl: '/',
  userRole: 'company',
  subscription: [
    {
      created_at: '2019-10-25 10:08:39',
      description: null,
      description_en: null,
      id: 7,
      name: 'whitelabel',
      name_en: null,
      pivot: { subscription_id: 1, feature_id: 7, hide: 0 },
      status: true,
      updated_at: '2019-10-28 17:05:13',
    },
    {
      created_at: '2019-10-25 10:08:39',
      description: null,
      description_en: null,
      id: 8,
      name: 'projects',
      name_en: null,
      pivot: { subscription_id: 1, feature_id: 8, hide: 0 },
      status: true,
      updated_at: '2019-10-28 17:05:13',
    },
  ],
  userBankTransfer: {},
  company,
  locale: 'pt',
};

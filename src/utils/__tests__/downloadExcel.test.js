import { downloadExcel } from '../index';

const fileName = 'downloadExcel';
const isDownloadFile = false;
const translateMessage = ({ id }) => (id === 'yes' ? 1 : 0);
const columns = [
  {
    type: undefined,
    text: 'id',
    apiFieldName: 'id',
  },
  {
    type: undefined,
    text: 'owner_name',
    apiFieldName: 'owner_name',
  },
  {
    type: undefined,
    text: 'owner_email',
    apiFieldName: 'owner_email',
  },
  {
    type: undefined,
    text: 'owner_phone',
    apiFieldName: 'owner_phone',
  },
  {
    type: undefined,
    text: 'name',
    apiFieldName: 'name',
  },
  {
    type: undefined,
    text: 'email',
    apiFieldName: 'email',
  },
  {
    type: undefined,
    text: 'phone',
    apiFieldName: 'phone',
  },
  {
    type: undefined,
    text: 'nif',
    apiFieldName: 'nif',
  },
  {
    type: undefined,
    text: 'dateAdded',
    apiFieldName: 'dateAdded',
  },
  {
    type: undefined,
    text: 'paypal_email',
    apiFieldName: 'paypal_email',
  },
  {
    type: undefined,
    text: 'iban',
    apiFieldName: 'iban',
  },
  {
    type: 'bool',
    text: 'status',
    apiFieldName: 'status',
  },
  {
    type: 'bool',
    text: 'validated',
    apiFieldName: 'validated',
  },
];

const institutions = [
  {
    id: 1057,
    owner_name: 'Rocha',
    owner_email: 'rocha@esolidar.com',
    owner_phone: '351918888888',
    name: 'Charity Rocha',
    email: 'rocha2@esolidar.com',
    phone: '351919552199',
    nif: null,
    dateAdded: '2020-10-28 11:49:28',
    paypal_email: null,
    iban: 'PT50002700000001234567833',
    status: 1,
    validated: 1,
  },
];

describe('Excel data values ', () => {
  it('Comparison of values ​​sent and received', () => {
    const fileData = downloadExcel(
      translateMessage,
      institutions,
      columns,
      fileName,
      isDownloadFile
    );
    expect(fileData).toEqual(institutions);
  });
});

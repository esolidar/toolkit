import '@testing-library/jest-dom';
import { useIntl } from 'react-intl';
import getOdsList from '.';
import sdgList from '../../../__mocks__/sdgList';

test('test getOdsList to get EN data', () => {
  const intl = useIntl();
  const en = [
    {
      description: 'End poverty in all its forms everywhere',
      id: 1,
      image: 'https://static.esolidar.com/frontend/assets/ods/en/ods-1.png',
      name: 'No poverty',
    },
  ];

  expect(getOdsList([sdgList.data[0]], 'en', intl.formatMessage)).toStrictEqual(en);
});

test('test getOdsList to get PT data', () => {
  const intl = useIntl();

  const pt = [
    {
      description: 'End poverty in all its forms everywhere',
      id: 1,
      image: 'https://static.esolidar.com/frontend/assets/ods/pt/ods-1.png',
      name: 'No poverty',
    },
  ];

  expect(getOdsList([sdgList.data[0]], 'pt', intl.formatMessage)).toStrictEqual(pt);
});

test('test getOdsList to get BR data', () => {
  const intl = useIntl();

  const br = [
    {
      description: 'End poverty in all its forms everywhere',
      id: 1,
      image: 'https://static.esolidar.com/frontend/assets/ods/br/ods-1.png',
      name: 'No poverty',
    },
  ];
  expect(getOdsList([sdgList.data[0]], 'br', intl.formatMessage)).toStrictEqual(br);
});

test('test getOdsList with status false', () => {
  const intl = useIntl();
  const data = [
    {
      id: 1,
      ods_id: 1,
      tag_name: 'ods-1',
      status: false,
      updated_at: '2020-02-17 16:44:07',
      created_at: '2020-02-17 16:43:45',
      name: '1-ods-1',
    },
  ];

  expect(getOdsList(data, 'br', intl.formatMessage)).toStrictEqual([undefined]);
});

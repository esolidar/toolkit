/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import Documents from '../Documents';

const props = {
  isLoadingSearch: false,
  documents: [
    {
      company_id: 1,
      created_at: '2017-08-24 10:20:28',
      file: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/companies/1/documents/92b5e29c-e8fd-44e4-acdf-3634c77002c9.txt?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J/20200427/eu-west-1/s3/aws4_request&X-Amz-Date=20200427T162430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=d88cc8444aef12e7387fb35d7d5448788ac1f0a6add4f35ed93b7a0be44534a4',
      file_size: '1103660',
      file_type: 'txt',
      id: 28,
      streamFile: 'amazons3',
      summary: 'cum caraças',
      tags: 'asdgfdsafgsdfg',
      title: 'teste deploy',
      updated_at: '2018-10-31 19:49:35',
    },
  ],
  downloadText: 'Download',
  noResultsText: 'No Results',
  headerTitleText: 'Shared documents',
  headerSubtitleText: 'Here you have the documents shared by your company to see or download.',
  handlePageChange: () => { },
  onSearch: () => { },
  errors: {},
  searchPlaceholder: 'Search by title or description',
  searchValue: '',
  activePage: 1,
  per_page: 5,
  total: 10,
};

describe('Documents component', () => {
  it('renders Documents correctly', () => {
    const component = shallow(<Documents {...props} />);
    expect(component).toHaveLength(1);
  });
});

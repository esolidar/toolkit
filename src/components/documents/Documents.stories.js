import React from 'react';
import Documents from './Documents';

export default {
  title: 'Components/Documents',
  component: Documents,
};

const Template = args => <Documents {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['Documents.test.js'],
};
Default.args = {
  isLoadingSearch: false,
  documents: [
    {
      company_id: 1,
      created_at: '2017-08-24 10:20:28',
      file: 'https://cdn.testesolidar.com/companies/1/documents/92b5e29c-e8fd-44e4-acdf-3634c77002c9.txt?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J/20200427/eu-west-1/s3/aws4_request&X-Amz-Date=20200427T162430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=d88cc8444aef12e7387fb35d7d5448788ac1f0a6add4f35ed93b7a0be44534a4',
      file_size: '1103660',
      file_type: 'txt',
      id: 28,
      streamFile: 'amazons3',
      summary: 'cum caraças',
      tags: 'asdgfdsafgsdfg',
      title: 'teste deploy',
      updated_at: '2018-10-31 19:49:35',
      public: true,
    },
    {
      id: 343,
      project_id: 207,
      user_id: 51795,
      name: 'File with less than 5Mb (1).pdf',
      description: null,
      file: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/whitelabel/5/projects/files/Filewithlessthan5Mb-8b774e88-82f6-43f3-917d-ce5547eecf19.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J%2F20220325%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220325T120457Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=47d4d90666219a76bb844cc2ada52cf95b7e3a69a6d84ecd1391b47795692bfb',
      file_type: 'pdf',
      file_size: 15650,
      public: false,
      is_form_file: true,
      created_at: '2022-03-25 12:00:01',
      updated_at: '2022-03-25 12:00:03',
    },
  ],
  downloadText: 'Download',
  noResultsText: 'No Results',
  headerTitleText: 'Shared documents',
  headerSubtitleText: 'Here you have the documents shared by your company to see or download.',
  handlePageChange: () => {},
  onSearch: () => {},
  errors: {},
  searchPlaceholder: 'Search by title or description',
  searchValue: '',
  activePage: 1,
  per_page: 5,
  total: 10,
};

import crowdfunding from './crowdfunding';
const list = {
  current_page: 1,
  data: [crowdfunding],
  first_page_url: 'http://api.testesolidar.com/v1/user/9/crowdfunding?page=1',
  from: 1,
  last_page: 1,
  last_page_url: 'http://api.testesolidar.com/v1/user/9/crowdfunding?page=1',
  links: [
    {
      url: null,
      label: '« Anterior',
      active: false,
    },
    {
      url: 'http://api.testesolidar.com/v1/user/9/crowdfunding?page=1',
      label: '1',
      active: true,
    },
    {
      url: null,
      label: 'Seguinte »',
      active: false,
    },
  ],
  next_page_url: null,
  path: 'http://api.testesolidar.com/v1/user/9/crowdfunding',
  per_page: '6',
  prev_page_url: null,
  to: 6,
  total: 25,
};

export default list;

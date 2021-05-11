import company from './company';
import user from './user';
import ods from './ods';

const project = {
  id: 80,
  whitelabel_id: 21,
  category_id: 19,
  as_company: 0,
  description: 'Project 4',
  cover: null,
  title: 'Project 4',
  user_id: 51803,
  review_average: null,
  whitelabel_config: {
    id: 21,
    company_id: 273,
    domain: null,
    subdomain: 'rochacompany.esolidar.local',
    company,
  },
  ods: [ods],
  user,
  images: [
    {
      id: 195,
      project_id: 80,
      streamImage: 'amazons3',
      image: 'whitelabel/21/projects/a2ed3a9b-4159-4df4-8974-7c1edf538fd0.jpg',
      image_type: 'jpg',
      image_size: 1745830,
      default: 1,
      position: 1,
      updated_at: '2021-02-01 12:02:02',
      created_at: '2021-02-01 12:02:01',
    },
  ],
};

export default project;

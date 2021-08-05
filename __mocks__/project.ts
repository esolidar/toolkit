import company from './company';
import user from './user';
import ods from './ods';
// import Project from '../src/interfaces/project.types';
import auction from './auction';
import crowdfunding from './crowdfunding';

const project = {
  id: 84,
  whitelabel_id: 9,
  category_id: 5,
  user_id: 51974,
  as_company: 0,
  cover: null,
  title: 'Projecto Rocha',
  description: 'Descrição',
  form: '[{"id":"input-1","name":"Título do projeto","type":"input","fixed":true,"required":true,"reply":"Projecto Rocha","position":0},{"id":"input-2","name":"Descrição","type":"textarea","fixed":true,"required":true,"reply":"Descrição","position":1},{"id":"input-3","name":"Categoria","type":"dropdown","fixed":true,"required":true,"reply":"5","position":2},{"id":"input-4","name":"ODS","type":"ods","fixed":true,"position":3},{"id":"input-5","name":"Imagens","type":"upload-images","fixed":true,"position":4},{"id":"input-105","name":"Escolha as opções que mais lhe agradam","help":"","type":"checkbox","required":true,"requiredMin":"2","requiredMax":"3","isPrivate":false,"options":["Cinema","Literatura","Praia","Montanha"],"checked":["Cinema","Literatura"],"position":5}]',
  private_form:
    '[{"id":"input-106","name":"Achas que o JJ vai ser campeão?","help":"","type":"checkbox","required":true,"requiredMin":1,"requiredMax":"1","isPrivate":true,"options":["Não","Sim"],"checked":["Sim"],"position":6}]',
  status: 'APPROVED',
  uuid: '185afebc-3856-4b68-b0d6-df172a43865e',
  status_reason:
    '[{"user_id":9,"status":"APPROVED","reason":"Muito bom","created_at":"2021-06-09T10:35:19.870Z"}]',
  updated_at: '2021-06-09 10:35:19',
  created_at: '2021-06-09 10:34:19',
  review_average: 5,
  whitelabel_config: {
    id: 9,
    company_id: 254,
    domain: 'https://www.whitelabel-test.com',
    subdomain: 'joel.testesolidar.com',
    company,
  },
  ods: [ods],
  user,
  project_category: {
    id: 5,
    whitelabel_id: 9,
    name: 'Categoria 1',
    name_tag: 'categoria-1',
    summary: '',
    status: 1,
    image: 'projects/categories/97882e05-d38e-4d4f-915f-93bdde9335f3.png',
    updated_at: '2021-02-04 12:10:46',
    created_at: '2020-03-18 14:20:19',
  },
  images: [
    {
      id: 121,
      project_id: 84,
      streamImage: 'amazons3',
      image: 'whitelabel/9/projects/82629072-4a66-4968-8b9d-24b591b654af.jpg',
      image_type: 'jpg',
      image_size: 441547,
      default: 1,
      position: 1,
      updated_at: '2021-06-09 10:34:19',
      created_at: '2021-06-09 10:34:14',
    },
  ],
  auctions: [auction],
  crowdfundings: [crowdfunding],
};

export default project;

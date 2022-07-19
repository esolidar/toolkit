import images from './images';
import user from './user';

export const noteDefault = {
  id: 59,
  project_id: 389,
  text: '!@Nome Apelido! 59 Lorem ipsum dolor sit amet,',
  scraping_data: null,
  parent_id: 69,
  user_id: 9,
  user,
  images: [],
  files: [],
  replies: [],
  deleted_at: null,
  updated_at: '2022-07-10T13:41:39.000000Z',
  created_at: '2022-07-10T13:41:39.000000Z',
};

export const noteImages = {
  id: 65,
  project_id: 389,
  text: 'note 65 parent',
  scraping_data: null,
  parent_id: 68,
  user_id: 9,
  user,
  images,
  files: [],
  replies: [],
  deleted_at: null,
  updated_at: '2022-07-06T14:33:03.000000Z',
  created_at: '2022-07-06T14:33:03.000000Z',
};

export const noteFiles = {
  id: 66,
  project_id: 389,
  text: '66 Note with files',
  scraping_data: null,
  parent_id: 69,
  user_id: 3,
  user,
  images: [],
  files: [
    {
      id: 14,
      user_id: 3,
      project_note_id: 66,
      streamFile: 'amazons3',
      name: 'File',
      file: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/whitelabel/5/projects/389/notes/files/Googlepdf-e44a895a-2fea-4e61-9ff2-b7d7a08229ee.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J%2F20220706%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220706T143813Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=e263a2aa50eaf84f264f127713f8a1926b7a7253de930529a055db8e1ce01ddd',
      file_type: 'pdf',
      file_size: '59492',
      updated_at: '2022-07-06 14:37:58',
      created_at: '2022-07-06 14:37:51',
    },
    {
      id: 15,
      user_id: 3,
      project_note_id: 66,
      streamFile: 'amazons3',
      name: 'File',
      file: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/whitelabel/5/projects/389/notes/files/Webankor%28eSolidar%29-52937d27-0ecc-44c7-a179-eccbb63bf1c7.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J%2F20220706%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220706T143813Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=2a7dcb930351e6c57755304539282703bb7b4aefadc54c036f42c5d992f3d166',
      file_type: 'pdf',
      file_size: '260123',
      updated_at: '2022-07-06 14:37:58',
      created_at: '2022-07-06 14:37:51',
    },
    {
      id: 16,
      user_id: 3,
      project_note_id: 66,
      streamFile: 'amazons3',
      name: 'File',
      file: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/whitelabel/5/projects/389/notes/files/esolidar_Ajudandoaajudar%21-bc49b9ab-eb0e-4600-8d61-848f27ba2423.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J%2F20220706%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220706T143813Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=fb14a7a9e364219ddbca8eae46585457eb4d1de3fae3f0ece8f1af256d42921f',
      file_type: 'pdf',
      file_size: '635746',
      updated_at: '2022-07-06 14:37:58',
      created_at: '2022-07-06 14:37:51',
    },
  ],
  replies: [],
  deleted_at: null,
  updated_at: '2022-07-06T14:37:58.000000Z',
  created_at: '2022-07-06T14:37:58.000000Z',
};

export const noteVideo = {
  id: 67,
  project_id: 389,
  text: '67 veja o vídeo! #https://www.youtube.com/c/Cercl#',
  scraping_data: JSON.stringify({
    title: 'Be Svendsen live at Mount Nemrut, in Türkiye for Cercle',
    author_name: 'Cercle',
    author_url: 'https://www.youtube.com/c/Cercle',
    type: 'video',
    height: 200,
    width: 356,
    version: '1.0',
    provider_name: 'YouTube',
    provider_url: 'https://www.youtube.com/',
    thumbnail_height: 360,
    thumbnail_width: 480,
    thumbnail_url: 'https://i.ytimg.com/vi/5mpafLYHVd0/hqdefault.jpg',
    html: '<iframe width="356" height="200" src="https://www.youtube.com/embed/5mpafLYHVd0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Be Svendsen live at Mount Nemrut, in Türkiye for Cercle"></iframe>',
    videoUrl: 'https://www.youtube.com/watch?v=5mpafLYHVd0&ab_channel=Cercle',
  }),
  parent_id: null,
  user_id: 9,
  user,
  images: [],
  files: [],
  replies: [],
  deleted_at: null,
  updated_at: '2022-07-06T14:41:18.000000Z',
  created_at: '2022-07-06T14:41:18.000000Z',
};

export const noteUrl = {
  id: 68,
  project_id: 389,
  text: '68 #https://www.esolidar.com/#',
  scraping_data:
    '{"domain":"www.esolidar.com","title":"esolidar | Ajudando a ajudar!","description":"Faça a gestão de tudo que você precisa para ESG, RSC e sustentabilidade em um único lugar. Capacite-se para aumentar a conscientização sobre o que é importante e crie uma cultura empresarial orientada para o bem.","og_title":"esolidar | Ajudando a ajudar!","og_description":"Faça a gestão de tudo que você precisa para ESG, RSC e sustentabilidade em um único lugar. Capacite-se para aumentar a conscientização sobre o que é importante e crie uma cultura empresarial orientada para o bem.","og_image":"https://uploads-ssl.webflow.com/60772889b1dfccd8c9417886/60a232f26727e36d393b6a1f_social_share.png","link":"https://www.esolidar.com/"}',
  parent_id: 69,
  user_id: 3,
  user,
  images: [],
  files: [],
  replies: [noteImages],
  deleted_at: null,
  updated_at: '2022-07-06T14:46:31.000000Z',
  created_at: '2022-07-06T14:46:31.000000Z',
};

export const noteWithReplies = {
  id: 69,
  project_id: 389,
  text: '69 #https://www.esolidar.com/#',
  scraping_data: null,
  parent_id: null,
  user_id: 3,
  user,
  images: [],
  files: [],
  replies_count: 4,
  replies: [noteDefault, noteUrl],
  deleted_at: null,
  updated_at: '2022-07-06T13:41:39.000000Z',
  created_at: '2022-07-06T13:41:39.000000Z',
};

import currency from './currency';
import language from './language';
import phone from './phone';

const user = {
  id: 51803,
  institution_id: null,
  firstName: 'Miguel1',
  lastName: 'Rocha1',
  image:
    'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/users/51803/1613673263.jpg?v=1613673263',
  streamImage: 'amazons3',
  language,
  currency,
  thumbs: {
    original: 'https://cdn.testesolidar.com/users/51803/1613673263.jpg?v=1613673263',
    standard: 'https://cdn.testesolidar.com/users/51803/1613673263-STANDARD.jpg',
    thumb: 'https://cdn.testesolidar.com/users/51803/1613673263-THUMB.jpg',
  },
  work_email: [
    { company_id: 273, name: 'Miguel Rocha', role: 'owner', department: null, user: null },
  ],
  name: 'Miguel1 Rocha1',
  s3_key: 'users/51803/1613673263.jpg?v=1613673263',
  institution: null,
  phones: [phone],
};

export default user;

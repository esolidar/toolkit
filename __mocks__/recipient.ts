import Recipient from '../src/interfaces/recipient.types';
import currency from './currency';
import institution from './institution';
import language from './language';

const recipient: Recipient = {
  currency,
  id: 1124,
  image: null,
  institution,
  institution_id: 30,
  language,
  name: null,
  phones: [],
  s3_key: null,
  thumbs: {
    original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
    standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
    thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
  },
};

export default recipient;

import Currency from './currency.types';
import Institution from './institution.types';
import Language from './language.types';
import Thumbs from './thumbs.types';

interface Recipient {
  currency: Currency;
  id: number;
  image: any;
  institution: Institution;
  institution_id: number;
  language: Language;
  name: string | null;
  phones: any[];
  s3_key: number | null;
  thumbs: Thumbs;
}

export default Recipient;

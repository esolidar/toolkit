import formatDistancePT from './pt';
import formatDistancePTBR from './ptBR';
import formatDistanceENUS from './enUS';

const formatDistance = {
  pt: formatDistancePT,
  ptBR: formatDistancePTBR,
  enUS: formatDistanceENUS,
};

export default formatDistance;

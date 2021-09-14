import ProfileAvatar from '../../components/profileAvatar/ProfileAvatar.types';
import ShareNetwork from '../../unreleased/shareNetwork/ShareNetwork.types';

interface Props {
  headerChildren?: JSX.Element;
  bodyChildren?: JSX.Element;
  className?: string;
  organizedBy?: ProfileAvatar;
  shareNetwork?: ShareNetwork;
  dataTestId?: string;
  dataTestIdHeader?: string;
  dataTestIdBody?: string;
  dataTestIdOrganized?: string;
  dataTestIdFooter?: string;
}

export default Props;

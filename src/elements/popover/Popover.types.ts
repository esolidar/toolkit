import { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger';

interface Props extends OverlayTriggerProps {
  popoverHeaderChildren?: JSX.Element;
  popoverBodyChildren: JSX.Element;
}

export default Props;

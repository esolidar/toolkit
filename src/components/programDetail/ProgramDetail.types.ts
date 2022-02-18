import AccelerationProgram from '../../interfaces/accelerationProgram.types';

interface Props {
  programConfig: AccelerationProgram;
  onSubmitProjectButton(): void;
  onClickAccelerator(): void;
  serverlessResizeImage: string;
  previewMode: boolean;
  breadcrumb: JSX.Element;
  viewportSize: string;
}

export default Props;

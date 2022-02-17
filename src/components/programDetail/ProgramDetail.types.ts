import AccelerationProgram from '../../interfaces/accelerationProgram.types';

interface Env {
  serverlessResizeImage: string;
  cdnUploadsUrl: string;
  imgCdn: string;
}
interface Props {
  programConfig: AccelerationProgram;
  onSubmitProjectButton(): void;
  onClickAccelerator(): void;
  serverlessResizeImage: string;
  env: Env;
  previewMode: boolean;
  breadcrumb: JSX.Element;
  viewportSize: string;
}

export default Props;

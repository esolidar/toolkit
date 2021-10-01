interface Errors {
  image: string;
}

interface Env {
  serverlessResizeImage: string;
  cdnStatic: string;
}

export interface Props {
  thumb: string;
  errors: Errors;
  onDrop({ image: HTMLImageElement, thumb: string }): void;
  env: Env;
}

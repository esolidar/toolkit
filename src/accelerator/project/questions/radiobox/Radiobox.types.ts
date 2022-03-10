interface Options {
  id: number;
  value: string;
}

interface Props {
  description: string;
  options: Options[];
  privacy: 'public' | 'private';
  question: string;
  required?: boolean;
  id: number;
  control: any;
  handleChange(): void;
}

export default Props;

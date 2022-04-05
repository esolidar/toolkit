interface Options {
  id: number;
  value: string;
}

interface Props {
  description: string;
  options: Options[];
  privacy: 'public' | 'private';
  question: string;
  name: string;
  required?: boolean;
  control: any;
  reply: string | number;
}

export default Props;

interface Options {
  id: number;
  value: string;
}

interface Props {
  name: string;
  answersAllowed: 'unlimited' | 'exact' | 'range';
  description: string;
  options: Options[];
  privacy: 'public' | 'private';
  question: string;
  exact?: number;
  rangeMin?: number;
  rangeMax?: number;
  required?: boolean;
  id: number;
  control: any;
  handleChange(): void;
  reply: number[];
}

export default Props;

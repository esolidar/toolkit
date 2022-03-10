interface Options {
  id: number;
  value: string;
}

interface Props {
  answersAllowed: 'unlimited' | 'exact' | 'range';
  description: any;
  options: Options[];
  privacy: 'public' | 'private';
  question: string;
  exact?: number;
  rangeMin?: number;
  rangeMax?: number;
  required: boolean;
  id: number;
  control: any;
  handleChange(): void;
}

export default Props;

import ProjectCategory from '../../../../interfaces/project/projectCategory';

interface Props {
  categoriesList: ProjectCategory[];
  required: boolean;
  requiredField: boolean;
  reply: number[];
  handleChangeCategories(ids: number[]): void;
  type?: string;
}

export default Props;

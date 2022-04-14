import ProjectCategory from '../../../../interfaces/project/projectCategory';

interface Props {
  categoriesList: ProjectCategory[];
  isValid: boolean;
  required: boolean;
  reply: number[];
  handleChangeCategories(ids: number[]): void;
  type?: string;
  onClickDelete(categoryId: number): void;
}

export default Props;

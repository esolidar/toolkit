import ProjectCategory from '../../../../interfaces/project/projectCategory';

interface Props {
  categoriesList: ProjectCategory[];
  reply: number[];
  handleChangeCategories(ids: number[]): void;
  type?: string;
}

export default Props;

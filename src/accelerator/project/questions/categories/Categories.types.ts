import ProjectCategory from '../../../../interfaces/project/projectCategory';

interface Props {
  categoriesList: ProjectCategory[];
  reply: number[];
  handleChangeCategories(ids: number[]): void;
}

export default Props;

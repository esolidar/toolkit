import ProjectCategory from '../../../../interfaces/project/projectCategory';

interface Props {
  categoriesList: ProjectCategory[];
  selectedCategories: number[];
  handleChangeCategories(ids: number[]): void;
}

export default Props;

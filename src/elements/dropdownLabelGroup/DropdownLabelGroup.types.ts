import Item from '../dropdown/Dropdown.types';

export interface CustomDropdownButtonProps {
  dropdownText: string;
  iconLeft?: string;
  iconRight?: string;
}

interface Props extends CustomDropdownButtonProps {
  labelText: string;
  dropdownItems: Item[];
  fullWidth: boolean;
}

export default Props;

interface Props {
  className?: string;
  bodyChildClassName?: string;
  tooltipBodyChild: JSX.Element;
  trigger?: 'hover' | 'click' | 'focus' | Array<'hover' | 'click' | 'focus'>;
  overlay: JSX.Element;
  placement?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';
  displayNone?: boolean;
}
export default Props;

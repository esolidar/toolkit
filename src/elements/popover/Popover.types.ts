interface Props {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  trigger?: 'hover' | 'click' | 'focus' | Array<'hover' | 'click' | 'focus'>;
  popoverHeaderChildren?: JSX.Element;
  popoverBodyChildren: JSX.Element;
  triggerChildren: JSX.Element;
}

export default Props;

export interface CodeboxProps {
  onClick(): void;
  textLeft: string;
  textRight: string;
}

export interface ModalBodyProps {
  title: string;
  showFacebook: boolean;
  showTwitter: boolean;
  showLinkedin: boolean;
  showEmail: boolean;
  showWhatsapp: boolean;
  showCopyToClipboard: boolean;
  windowLocationHref: string;
  onClickCopyToClipboard(showToast: boolean): void;
  showShareFeed: boolean;
  onclickShareToFeed?(): void;
}

interface Props extends ModalBodyProps {
  stickToBottomMobile: boolean;
  onCloseModal(): void;
  openModal: boolean;
}

export default Props;

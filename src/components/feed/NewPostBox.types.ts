import User from '../../interfaces/user.types';
import Post from '../../interfaces/post.types';

interface Image {
  id: number;
  image: string;
}

interface ImagesResponse {
  images?: Image[];
}

interface Scraper {
  description?: string;
  domain?: string;
  link?: string;
  og_description?: string;
  og_image?: string;
  og_title?: string;
  title?: string;
}

interface Props {
  companyId: number;
  user?: User;
  post?: Post;
  imagesResponse?: ImagesResponse;
  feedPost: (companyId: number, data: any) => void;
  feedUploadGallery: (companyId: number, file, position: number) => void;
  deleteImages: (companyId: number, url: number) => void;
  loginAction: () => void;
  feedWebScrapter: (companyId: number, url: string) => void;
  scraper?: Scraper;
}

export default Props;

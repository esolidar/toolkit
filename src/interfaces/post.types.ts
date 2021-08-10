import Thumbs from './thumbs.types';

interface Loves {
  count: number;
  list: any;
}
interface Share {
  created_at: string;
  description: string;
  domain: string;
  id: number;
  link: string;
  og_description: string;
  og_image: string;
  og_title: string;
  title: string;
  updated_at: string;
}

interface Image {
  created_at: string;
  id: number;
  image: string;
  image_size?: number;
  image_type?: number;
  position: number;
  post_id: number;
  s3_key: string;
  streamImage: string;
  thumbs: Thumbs;
  updated_at: string;
}

interface Post {
  as_company: number;
  auction_id?: number;
  comments_count: number;
  company_id: number;
  created_at: string;
  id: number;
  images?: Image[];
  loves: Loves;
  post_id?: number;
  public: number;
  share?: Share;
  share_id?: number;
  text: string;
  type: string;
  updated_at: string;
  user_id: number;
}

export default Post;

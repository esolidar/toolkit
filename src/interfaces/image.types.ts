interface Image {
  id: number;
  created_at: string;
  image: string;
  image_size: string | number | null;
  image_type: string | null;
  streamImage: string;
  updated_at?: string;
}
export default Image;

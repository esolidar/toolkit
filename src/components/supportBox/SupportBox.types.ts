interface Thumbs {
  thumb: string;
}
interface Institution {
  thumbs: Thumbs;
  name: string;
  id: number;
}

interface Props {
  campaign: {
    institution: Institution;
  };
}

export default Props;

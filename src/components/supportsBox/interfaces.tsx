interface Institution {
  thumbs: {
    thumb: string;
  };
  name: string;
  id: number;
}

interface Props {
  campaign: {
    institution: Institution;
  };
}

export default Props;

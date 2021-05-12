import ReadMoreText from './ReadMoreText';

export default {
  title: 'Components/ReadMoreText',
  component: ReadMoreText,
};

const Template = args => <ReadMoreText {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ReadMoreText.test.js'],
};
Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nunc et lacus hendrerit finibus sit amet vel dui. Mauris vehicula, ante eget varius porttitor, enim massa accumsan magna, nec pellentesque ante leo vel felis. Maecenas ut velit sed odio aliquam posuere posuere nec tortor. Ut pellentesque fringilla eros id finibus. Morbi sit amet tortor vitae enim convallis mollis. Curabitur id accumsan libero. Nam ut rhoncus nunc.<br /><br />Aenean nec finibus neque, vitae facilisis ex. Proin volutpat nisi a mi viverra laoreet. Pellentesque sed leo id ante finibus congue eget eget est. Phasellus non odio turpis. In vel felis non sapien tempus posuere et in sem. Duis eleifend mauris sed volutpat luctus. Cras ullamcorper sagittis porttitor. Ut auctor neque sed mauris pulvinar sodales. Donec purus orci, viverra nec justo vitae, mollis hendrerit sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum lacus sit amet feugiat interdum. Duis vel eleifend dui. Suspendisse sagittis mauris sed molestie mattis. Aenean vestibulum tortor quis tellus scelerisque, id luctus purus mattis. Morbi massa sapien, rutrum vulputate nisi non, faucibus dictum nisl.<br /><br />Praesent quis varius arcu. Pellentesque quis lectus nec lorem maximus tincidunt ac ut sem. Vivamus nunc justo, semper vitae dui at, fermentum mattis mi. Nam placerat, est et blandit lobortis, sapien sem tristique lectus, et interdum sem metus sit amet ante. Donec luctus quis mi nec tincidunt. Ut rutrum eros vel nisl efficitur tempus. Aliquam erat volutpat. Morbi ipsum dolor, consectetur quis tristique non, condimentum accumsan libero.<br /><br />Pellentesque gravida nunc sollicitudin lacus fringilla, sed gravida lorem gravida. Etiam aliquet, lorem nec scelerisque convallis, libero magna varius massa, eget gravida nibh quam eget lacus. Nullam at justo at metus ultrices blandit vel et eros. Nullam eu sapien id libero ornare pulvinar non eu justo. In tempor neque at vehicula rutrum. Sed commodo neque ut congue bibendum. Donec eget nisl erat.<br /><br />Phasellus sem risus, facilisis ut posuere in, facilisis in sem. Pellentesque dictum quis eros sed gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eu purus tristique, aliquam lorem condimentum, pellentesque nunc. Donec varius, metus id dapibus imperdiet, orci tortor semper lorem, in tincidunt leo turpis ut urna. Quisque congue quam quis diam condimentum interdum. Donec at est odio.',
  charLimit: 200,
  color: 'red',
  readMoreTextTranslation: 'Ver mais',
  readLessTextTranslation: 'Ver menos',
};

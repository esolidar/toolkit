interface Return {
  nameWithoutExtension: string;
  extension: string;
}

const splitExtensionFromFileName = (name: string): Return => {
  const nameWithoutExtension = name.split('.').slice(0, -1).join('.');
  const extension = `.${name.split('.').splice(-1).join('.')}`;
  return { nameWithoutExtension, extension };
};

export default splitExtensionFromFileName;

export const encodeBase64 = (data: any) => {
  return Buffer.from(JSON.stringify(data)).toString('base64');
};

export const decodeBase64 = (data: string) => {
  return JSON.parse(Buffer.from(data, 'base64').toString());
};

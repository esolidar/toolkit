import '@testing-library/jest-dom';
import splitExtensionFromFileName from '.';

test('splitExtensionFromFileName - simple file name', () => {
  const fileName = 'document.pdf';
  const expectedResult = {
    nameWithoutExtension: 'document',
    extension: '.pdf',
  };

  expect(splitExtensionFromFileName(fileName)).toEqual(expectedResult);
});

test('splitExtensionFromFileName - complex file name', () => {
  const fileName = 'document.test.pdf';
  const expectedResult = {
    nameWithoutExtension: 'document.test',
    extension: '.pdf',
  };

  expect(splitExtensionFromFileName(fileName)).toEqual(expectedResult);
});

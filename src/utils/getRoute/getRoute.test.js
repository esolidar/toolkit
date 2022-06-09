import '@testing-library/jest-dom';
import getRoute from '.';

test('getRoute function to get program detail route', () => {
  expect(getRoute.public.accelerator.program.DETAIL('en', '10')).toEqual('/en/accelerator/10');
});

test('getRoute function to get project detail route', () => {
  expect(getRoute.public.accelerator.project.DETAIL('pt', 25, 35, 'project title')).toEqual(
    '/pt/accelerator/25/projects/35-project-title'
  );
});

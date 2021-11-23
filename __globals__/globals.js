global.window = { location: { pathname: null } };
global.google = {
  maps: {
    LatLng: jest.fn(() => {}),
  },
};

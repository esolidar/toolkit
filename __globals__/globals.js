global.window = { location: { pathname: null } };
global.google = {
  maps: {
    LatLng: jest.fn(() => {}),
  },
};

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};

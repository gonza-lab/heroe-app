export const contextValue = {
  user: {
    logged: false,
    name: 'Gonzalo',
  },
  dispatch: jest.fn(),
};

export const historyMock = {
  replace: jest.fn(),
  listen: jest.fn(),
  push: jest.fn(),
  location: jest.fn(),
  createHref: jest.fn(),
  goBack: jest.fn(),
  length: 10,
};


global.document = {
  getElementById: jest.fn().mockImplementation((id) => {
    if (id === 'urlForm') {
      return {
        addEventListener: jest.fn(),
      };
    }
    return null;
  }),
  body: {
    innerHTML: '',
  },
};

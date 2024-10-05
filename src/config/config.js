let config = {
  api_url: process.env.REACT_APP_BASE_URL,
  image_url: process.env.REACT_APP_IMAGE_URL,
  joiOptions: {
    abortEarly: false,
    allowUnknown: true,
    errors: {
      wrap: {
        label: "",
      },
    },
  },
};

export default config;

export const validateProduct = (inputs) => {
  const errors = {};
  if (!inputs.name) {
    errors.name = "Original title is required";
  } else if (inputs?.name.indexOf(" ") === 0) {
    errors.name = "No empty spaces allowed";
  }

  if (!inputs.image_url) {
    errors.image_url = "Image URL is required";
  } else if (
    !/[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi.test(
      inputs?.image_url
    )
  ) {
    errors.image_url = "Image Url is not valid";
  }

  if (!inputs.price) {
    errors.price = "Price is required";
  }

  if (!inputs.brand) {
    errors.brand = "Brand is required";
  }

  if (!inputs.description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length < 1) {
    errors.isValid = false;
  } else {
    errors.isValid = true;
  }

  return errors;
};

export const validateBrand = (inputs) => {
  const errors = {};
  if (!inputs.name) {
    errors.name = "Original title is required";
  } else if (inputs?.name.indexOf(" ") === 0) {
    errors.name = "No empty spaces allowed";
  }

  if (!inputs.logo_url) {
    errors.logo_url = "Image URL is required";
  } else if (
    !/[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi.test(
      inputs?.logo_url
    )
  ) {
    errors.logo_url = "Image Url is not valid";
  }

  if (Object.keys(errors).length < 1) {
    errors.isValid = false;
  } else {
    errors.isValid = true;
  }

  return errors;
};

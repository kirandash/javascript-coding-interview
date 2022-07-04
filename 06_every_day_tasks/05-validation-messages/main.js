// Format backend validation message to frontend format

const backendErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};

// ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]

// Naive (Wrong)
const feError = [];
for (key in backendErrors) {
  if (
    backendErrors[key].hasOwnProperty("errors") &&
    backendErrors[key]["errors"].length > 0
  ) {
    const fieldMessages = backendErrors[key].errors
      .map((error) => error.message)
      .join(",");
    const capitalizedField = key.charAt(0).toUpperCase() + key.slice(1);
    feError.push(`${capitalizedField}: ${fieldMessages}`);
  }
}

console.log(feError);

// Best sol
const humanReadableBackendErrors = Object.entries(backendErrors).map(
  ([field, value]) => {
    const fieldMessages = value.errors.map((error) => error.message).join(",");
    const capitalizedField = field.charAt(0).toUpperCase() + field.slice(1);
    return `${capitalizedField}: ${fieldMessages}`;
  }
);

console.log(humanReadableBackendErrors);

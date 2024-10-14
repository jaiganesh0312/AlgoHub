const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex = /^[6789]\d{9}$/;

export const validateField = (field, value) => {
  switch (field) {
    case 'email':
      return !emailRegex.test(value);
    case 'password':
      return !passwordRegex.test(value);
    case 'phoneNumber':
      return !phoneRegex.test(value);
    case 'userName':
      return value.trim().length < 4;
    default:
      return false;
  }
};

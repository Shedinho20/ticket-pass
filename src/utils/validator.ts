const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ValidationType = Record<string, (...args: (string | any)[]) => string | undefined>;

export const validators: ValidationType = {
  email: (email: string) => {
    if (email === '') {
      return 'E-mail is required';
    }

    if (!EMAIL_PATTERN.test(email)) {
      return 'E-mail is invalid';
    }
  },

  password: (password: string) => {
    if (password === '') {
      return 'Password is required';
    }
    if (password.length < 7) {
      return 'Password is weak';
    }
  },
  desc: (desc: string) => {
    if (desc === '') {
      return 'Description is required';
    }
  },
  name: (name: string) => {
    if (name === '') {
      return 'Event name is required';
    }
  },
  endDate: (endDate: string) => {
    if (endDate === '') {
      return 'Date is required';
    }
  },
  startDate: (endDate: string) => {
    if (endDate === '') {
      return 'Date is required';
    }
  },
  uploadeImage: (uploadeImage: any) => {
    if (!uploadeImage) {
      return 'Upload an image';
    }
  }
};

export const validateForm = (formData: Record<string, any>, formValidation: ValidationType) => {
  const dataKeys = Object.keys(formData);
  const errors: any = {};
  let isValid = true;
  for (let i = 0; i < dataKeys.length; i++) {
    const dataKey = dataKeys[i];
    const error = formValidation[dataKey](formData[dataKey]);
    errors[dataKey] = error;
    if (error) {
      isValid = false;
    }
  }

  return { isValid, errors };
};

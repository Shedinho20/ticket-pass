import { useState } from 'react';
import { useLoginMutation } from '../../../network/Mutations/useLoginMutation';
import { validateForm, validators } from '../../../utils/validator';

export const useLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formError, setFormError] = useState({
    email: '',
    password: ''
  });

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const error = validators[name](value);
    setFormData(formData => ({ ...formData, [name]: value }));
    setFormError(formError => ({ ...formError, [name]: error }));
  };

  const { islogIn, loginMutation: login } = useLoginMutation();

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const { isValid, errors } = validateForm(formData, validators);
    setFormError(errors);
    if (!isValid) {
      return;
    }

    await login.mutateAsync(formData);
  };

  return { islogIn, onSubmit, formData, formError, updateFormData };
};

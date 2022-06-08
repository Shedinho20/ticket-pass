import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateEventMutation } from '../../../network/Mutations/useCreateEventMutation';
import { validateForm, validators } from '../../../utils/validator';

export const useCreateEvent = () => {
  const [uploadeImage, setUploadImage] = useState<any>();
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    startDate: '',
    endDate: ''
  });
  const [formError, setFormError] = useState({
    name: '',
    desc: '',
    startDate: '',
    endDate: '',
    uploadeImage: ''
  });

  const { createvent, isLoading } = useCreateEventMutation();

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (!file) return;
    setUploadImage(file[0]);
    setFormError(formError => ({ ...formError, uploadeImage: '' }));
  };

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    const error = validators[name](value);
    setFormData(formData => ({ ...formData, [name]: value }));
    setFormError(formError => ({ ...formError, [name]: error }));
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const { isValid, errors } = validateForm({ ...formData, uploadeImage }, validators);
    setFormError(errors);
    if (!isValid) {
      return;
    }

    if (new Date(formData.startDate) >= new Date(formData.endDate)) {
      toast.warning('The end date must be greater than start date');
      return;
    }

    const payload = {
      ...formData,
      uploadeImage,
      startDate: (new Date(formData.startDate).getTime() / 1000).toString(),
      endDate: (new Date(formData.endDate).getTime() / 1000).toString()
    };
    createvent(payload);
  };

  return { isLoading, uploadeImage, onSubmit, updateFormData, handleImage, formError, formData };
};

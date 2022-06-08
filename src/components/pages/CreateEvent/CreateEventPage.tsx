import React from 'react';
import { Button, Input, TextArea } from '../../atoms';
import { Container, Spacer } from '../../layouts';
import { DropFileInput } from '../../molecules';
import styles from './createEvent.module.css';
import { useCreateEvent } from './useCreateEvent';

export const CreateEventPage = () => {
  const { isLoading, uploadeImage, onSubmit, updateFormData, handleImage, formError, formData } = useCreateEvent();

  return (
    <Container extraClassNames={styles.container} align="center" direction="column" pagePadding>
      <Spacer height={50} />
      <form>
        <Input
          label="Event name"
          type="text"
          name="name"
          value={formData.name}
          error={formError.name}
          onChange={updateFormData}
          autoComplete="off"
          placeholder="Event name"
        />
        <Spacer height={20} />
        <Container align="center" gap="space-between" extraClassNames={styles.containerDate}>
          <Input
            label="Start Date"
            type="date"
            name="startDate"
            value={formData.startDate}
            error={formError.startDate}
            onChange={updateFormData}
            autoComplete="off"
            placeholder="select"
          />
          <Spacer width={10} height={20} />
          <Input
            label="End Date"
            type="date"
            name="endDate"
            value={formData.endDate}
            error={formError.endDate}
            onChange={updateFormData}
            autoComplete="off"
            placeholder="select"
          />
        </Container>
        <Spacer height={20} />
        <TextArea
          name="desc"
          value={formData.desc}
          onChange={updateFormData}
          placeholder="About this event"
          label="Event description"
          error={formError.desc}
        />
        <Spacer height={20} />
        <DropFileInput
          onChange={handleImage}
          image={uploadeImage?.name}
          accept="image/*"
          error={formError.uploadeImage}
        />
        <Spacer height={30} />
        <Button onClick={onSubmit} isLoading={isLoading}>
          SUBMIT
        </Button>
      </form>
    </Container>
  );
};

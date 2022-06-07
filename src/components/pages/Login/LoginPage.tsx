import React from 'react';
import { Button, Input, Logo } from '../../atoms';
import { Container, Spacer } from '../../layouts';
import styles from './login.module.css';
import { useLogin } from './useLogin';

export const LoginPage = () => {
  const { formData, islogIn, formError, updateFormData, onSubmit } = useLogin();

  return (
    <Container extraClassNames={styles.container} align="center" justify="center" direction="column" pagePadding>
      <Logo />
      <Spacer height={50} />
      <form>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          error={formError.email}
          onChange={updateFormData}
          autoComplete="email"
          placeholder="abc@xyz.com"
        />
        <Spacer height={20} />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          error={formError.password}
          onChange={updateFormData}
          autoComplete="email"
          placeholder="abc@xyz.com"
        />
        <Spacer height={30} />
        <Button onClick={onSubmit} isLoading={islogIn}>
          Log in
        </Button>
      </form>
    </Container>
  );
};

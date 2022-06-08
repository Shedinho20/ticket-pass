import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useLogout } from '../../../common/hooks/useLogout';
import { CREATE_EVENT, LOGIN } from '../../../routes/navigation';
import { userAtom } from '../../../store/atoms/userAtom';
import { Button } from '../../atoms';
import { Container, Spacer } from '../../layouts';

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.indexOf('create-event');
  const auth = useRecoilValue(userAtom);

  const logout = useLogout();

  return (
    <Container align="center" flex={1}>
      {path !== 1 && <Button onClick={() => navigate(CREATE_EVENT)}>Create Event</Button>}
      <Spacer width={20} />
      {auth?.access_token ? (
        <Button onClick={() => logout()} isOutline>
          Log out
        </Button>
      ) : (
        <Button onClick={() => navigate(`auth/${LOGIN}`)} isOutline>
          Log in
        </Button>
      )}
    </Container>
  );
};

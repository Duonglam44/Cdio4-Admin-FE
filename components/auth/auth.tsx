import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { getJwt } from '../../utils/auth';

type Token = string | null;

const Auth: React.FC<{ children: any; publicPages: string[] }> = ({
  children,
  publicPages,
}) => {
  const path = window.location.pathname;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    void checkLogin();
    // eslint-disable-next-line
  }, []);

  const checkLogin = async () => {
    try {
      const token: Token = getJwt();

      setLoading(false);
    } catch (error) {
      localStorage.removeItem('access_token');
      await router.replace('/login');

      return;
    }
  };

  if (loading) {
    return <>loading...</>;
  }

  return <>{children}</>;
};

export default Auth;

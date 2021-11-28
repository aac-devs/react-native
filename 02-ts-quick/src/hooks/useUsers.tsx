import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    if (pageRef.current === 0) {
      pageRef.current = 1;
      return alert('No more register!!');
    }

    const resp = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pageRef.current,
      },
    });
    if (pageRef.current > resp.data.total_pages) {
      alert('No more registers!!');
      pageRef.current = resp.data.total_pages;
    } else {
      setUsers(resp.data.data);
    }
  };

  const nextPage = () => {
    pageRef.current++;
    fetchUsers();
  };

  const backPage = () => {
    pageRef.current--;
    fetchUsers();
  };

  return { users, nextPage, backPage };
};

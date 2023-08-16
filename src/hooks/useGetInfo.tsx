import { useLocation, useParams } from 'react-router-dom';

type ItemType = 'file' | 'text';

export const useGetInfo = () => {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const type = search.split('=')[1] as ItemType;

  return { id, type };
};

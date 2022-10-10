import { useQuery } from '@tanstack/react-query';
import { readArticle } from 'api/crudAPI';

const useGetArticles = () => {
  const { data } = useQuery(['articles'], readArticle, {
    refetchOnWindowFocus: false,
    retry: 0,
  });
  return data;
};

export default useGetArticles;

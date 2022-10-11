import { readArticle } from '@api/crudAPI';
import { useQuery } from '@tanstack/react-query';

const useGetArticles = () => {
  const { data } = useQuery(['articles'], readArticle, {
    refetchOnWindowFocus: false,
    retry: 0,
  });
  return data;
};

export default useGetArticles;

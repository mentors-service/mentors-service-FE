import { IArticle } from '@home/types';
import { apiInstance } from '@api/setting';

export const getArticles = ({ pageParam = 1 }) =>
  apiInstance.get(`articles/list?offset=${pageParam}`).then((res) => res.data);

export const getArticle = (articleId: string): Promise<IArticle> =>
  apiInstance.get(`articles/detail/${articleId}`).then((res) => res.data);

export const createArticle = (data: any): Promise<any> => apiInstance.post('articles', data);

export const updateArticle = async () => {
  const res = await apiInstance.patch('/');
  return res.data.data;
};

export const deleteArticle = async (postKey: number) => {
  await apiInstance.delete(`/${postKey}`);
};

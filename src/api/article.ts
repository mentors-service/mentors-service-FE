import { apiInstance } from './setting';

interface IProps {
  data: string;
}

export const createArticle = async (data: any) => {
  await apiInstance.post('/', data);
};

export const readArticle = async () => {
  const res = await apiInstance.get('/article-id');
  return res.data.data;
};

export const updateArticle = async () => {
  const res = await apiInstance.patch('/');
  return res.data.data;
};

export const deleteArticle = async (postKey: number) => {
  await apiInstance.delete(`/${postKey}`);
};

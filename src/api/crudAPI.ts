import { apiInstance } from './setting';

interface IProps {
  data: string;
}

export const createArticle = async (data: any) => {
  try {
    return await apiInstance.post('/', data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const readArticle = async () => {
  try {
    const res = await apiInstance.get('/');
    return res.data.data;
  } catch (error) {
    return error;
  }
};

export const updateArticle = async () => {
  try {
    const res = await apiInstance.patch('/');
    return res.data.data;
  } catch (error) {
    return error;
  }
};

export const deleteArticle = async (postKey: number) => {
  try {
    return await apiInstance.delete(`/${postKey}`);
  } catch (error) {
    return error;
  }
};

import { apiInstance } from './setting';

export const createArticle = async () => {
  try {
    return await apiInstance.post('/');
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

export const deleteArticle = async (postKey: string) => {
  try {
    return await apiInstance.delete(`/${postKey}`);
  } catch (error) {
    return error;
  }
};

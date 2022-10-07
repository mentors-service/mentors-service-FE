import { apiInstance } from './Setting';

// Create Article
export const createArticle = async () => {
  const payload = new FormData();
  try {
    return await apiInstance.post('/', payload);
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Read Article
export const readArticle = async () => {
  try {
    const res = await apiInstance.get('/');
    return res.data.data;
  } catch (error) {
    return error;
  }
};

// UPdate Article
export const updateArticle = async () => {
  const payload = new FormData();
  try {
    const res = await apiInstance.put('/', payload, {
      // headers: {
      //   Authorization: `${cookies.token}`,
      // },
    });
    return res.data.data;
  } catch (error) {
    return error;
  }
};

// Delete Article
export const deleteArticle = async (postKey: string) => {
  try {
    return await apiInstance.delete(`/${postKey}`);
  } catch (error) {
    return error;
  }
};

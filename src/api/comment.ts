import { apiInstance } from './setting';

export const createComment = (data: any) => apiInstance.post(`comment?articleId=${data.articleId}`, data);

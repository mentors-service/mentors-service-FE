import { apiInstance } from '@api/setting';

export const createComment = (data: any) => apiInstance.post(`comment?articleId=${data.articleId}`, data);

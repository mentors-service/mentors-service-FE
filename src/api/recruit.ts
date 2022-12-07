import { apiInstance } from './setting';

export const updateRecruit = (articleId: string) => apiInstance.patch(`recruit?articleId=${articleId}`);

import { apiInstance } from '@api/setting';

export const updateRecruit = (articleId: string) => apiInstance.patch(`recruit?articleId=${articleId}`);

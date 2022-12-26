import { apiInstance } from '@api/setting';

export const updateScrap = (articleId: string) => apiInstance.patch(`scrap?articleId=${articleId}`);

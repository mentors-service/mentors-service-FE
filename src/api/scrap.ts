import { apiInstance } from './setting';

export const updateScrap = (articleId: string) => apiInstance.patch(`scrap?articleId=${articleId}`);

import { ICommentData } from '@article/types';

export interface IArticle {
  articleId: number;
  commentCnt: number;
  comments: ICommentData[];
  contents: string;
  createdAt: string;
  creater: { nickname: string; discription: string };
  endDate: string | null;
  modifiedAt: string;
  place: string;
  recruit: { isRecruited: false; joinCnt: 0; createrIdList: [] };
  scraps: { isScraped: false; articleId: 33; scrapCnt: 0; createrIdList: [] };
  startDate: string | null;
  status: string;
  title: string;
}

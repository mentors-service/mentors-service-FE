import { ICommentData } from '@article/types';

export interface IArticle {
  articleId: number;
  commentCnt: number;
  comments: ICommentData[];
  contents: string;
  createdAt: string;
  creater: { id: number; nickname: string; discription: string };
  endDate: string | null;
  modifiedAt: string;
  place: string;
  recruit: { isRecruited: false; joinCnt: 0; createrIdList: number[] };
  scraps: { isScraped: false; articleId: 33; scrapCnt: 0; createrIdList: number[] };
  startDate: string | null;
  status: string;
  title: string;
  totalRecruit: number;
}

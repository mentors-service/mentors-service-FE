export interface ICommentData {
  commentId: number;
  contents: string;
  createdAt: string;
  creater: { nickname: string; discription: string };
  modifiedAt: string;
  childs: ICommentData[];
}

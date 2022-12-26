export interface ICommentData {
  commentId: number;
  contents: string;
  createdAt: string;
  creater: { id: number; nickname: string; discription: string };
  modifiedAt: string;
  childs: ICommentData[];
}

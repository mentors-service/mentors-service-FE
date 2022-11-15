export interface ICommentData {
  id: number;
  creater: { img: string; name: string };
  createdAt: string;
  content: string;
  childs: ICommentData[];
}

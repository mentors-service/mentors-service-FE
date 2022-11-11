export interface CommentData {
  id: number;
  creater: {
    img: string;
    name: string;
  };
  createdAt: string;
  content: string;
  childs: CommentData[];
}

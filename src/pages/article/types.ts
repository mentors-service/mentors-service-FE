export interface CommentData {
  creater: {
    img: string;
    name: string;
  };
  createdAt: string;
  content: string;
  childs: CommentData[];
}

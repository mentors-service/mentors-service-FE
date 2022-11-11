import { useEffect } from 'react';
import CommentListItem from './CommentListItem';

const temp = [
  {
    id: 1,
    creater: { img: 'val', name: '무성' },
    createdAt: '20221024',
    content: 'this is contents.this is contents.this is contents.this is contents.',
    childs: [
      {
        creater: { img: 'val', name: '무성1' },
        createdAt: '20221024',
        content: 'this is contents.this is contents.',
        childs: [],
      },
    ],
  },
  {
    id: 2,
    creater: { img: 'val', name: '무성12' },
    createdAt: '20221024',
    content: 'this is contents.this is contents.',
    childs: [
      {
        creater: { img: 'val', name: '무성13' },
        createdAt: '20221024',
        content: 'this is contents.this is contents.',
        childs: [],
      },
    ],
  },
];

const CommentList = () => {
  const commentsAPI = () => {};

  useEffect(() => {
    commentsAPI();
  }, []);

  return (
    <>
      {temp.map((comment, index) => (
        <CommentListItem {...comment} key={comment.id} />
      ))}
    </>
  );
};

export default CommentList;

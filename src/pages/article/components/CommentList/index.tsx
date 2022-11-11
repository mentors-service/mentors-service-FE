import { useEffect } from 'react';
import CommentListItem from './CommentListItem';

const temp = [
  {
    id: 1,
    creater: { img: 'val', name: '무성' },
    createdAt: '2022-11-03T14:06:39.598+00:00',
    content: 'this is contents.this is contents.this is contents.this is contents.',
    childs: [
      {
        id: 3,
        creater: { img: 'val', name: '무성1' },
        createdAt: '2022-01-11T13:06:39.598+00:00',
        content: 'this is contents.this is contents.',
        childs: [],
      },
    ],
  },
  {
    id: 2,
    creater: { img: 'val', name: '무성12' },
    createdAt: '2022-11-11T14:06:39.598+00:00',
    content: 'this is contents.this is contents!!.',
    childs: [
      {
        id: 4,
        creater: { img: 'val', name: '무성13' },
        createdAt: '2022-11-11T14:06:39.598+00:00',
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

  console.log(temp);
  return (
    <>
      {temp.map((comment, index) => (
        <CommentListItem {...comment} key={comment.id} />
      ))}
    </>
  );
};

export default CommentList;

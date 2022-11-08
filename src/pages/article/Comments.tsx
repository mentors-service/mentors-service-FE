import { useEffect, useState } from 'react';
import { CommentData } from './types';
import Comment from './Comment';

const Comments = () => {
  const [comments, setComments] = useState<CommentData[]>([
    {
      creater: {
        img: 'val',
        name: '무성',
      },
      createdAt: '20221024',
      content: 'this is contents.this is contents.',
      childs: [
        {
          creater: {
            img: 'val',
            name: '무성1',
          },
          createdAt: '20221024',
          content: 'this is contents.this is contents.',
          childs: [],
        },
      ],
    },
    {
      creater: {
        img: 'val',
        name: '무성12',
      },
      createdAt: '20221024',
      content: 'this is contents.this is contents.',
      childs: [
        {
          creater: {
            img: 'val',
            name: '무성13',
          },
          createdAt: '20221024',
          content: 'this is contents.this is contents.',
          childs: [],
        },
      ],
    },
  ]);

  const commentsAPI = () => {};

  useEffect(() => {
    commentsAPI();
  }, []);

  return (
    <>
      {comments.map((comment) => (
        <Comment {...comment} key={1} />
      ))}
    </>
  );
};

export default Comments;

import useGetArticles from '@hooks/useGetArticles';
import styled from 'styled-components';
import { deleteArticle, updateArticle } from '@api/article';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Article = () => {
  const articles = useGetArticles();
  const postkyey = 15;
  const navigate = useNavigate();

  const deleteMutation = useMutation(deleteArticle, {
    onError: (error) => {
      console.log(error);
    },
  });

  const onClickDeleteButton = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      deleteMutation.mutate(postkyey);
      navigate('/');
    }
  };

  const UpdateMutation = useMutation(updateArticle, {
    onError: (error) => {
      console.log(error);
    },
  });

  const onClickUpdateButton = () => {
    UpdateMutation.mutate();
  };

  return (
    <div>
      {articles &&
        articles.map((article: any) => (
          <ArticleBox key={article.id}>
            <Title>{article.title}</Title>
            <Content>{article.content}</Content>
          </ArticleBox>
        ))}
      <button type='button' onClick={onClickDeleteButton}>
        삭제하기
      </button>
      <button type='button' onClick={onClickUpdateButton}>
        수정하기
      </button>
    </div>
  );
};

const ArticleBox = styled.article`
  margin-bottom: 12px;
  border-radius: 10px;
  border: 1px solid;
  padding: 10px;
  word-break: keep-all;
  margin-right: 20px;
  cursor: pointer;
`;
const Title = styled.h2``;
const Content = styled.p``;

export default Article;

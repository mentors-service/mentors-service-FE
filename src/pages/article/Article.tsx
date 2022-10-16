import useGetArticles from '@hooks/useGetArticles';
import styled from 'styled-components';
import { deleteArticle, updateArticle } from '@api/article';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Article = () => {
  const articles = useGetArticles();
  const POST_KEY = 15;
  const navigate = useNavigate();

  const deleteMutation = useMutation(deleteArticle, {
    onError: (error) => {},
  });

  const onClickDeleteButton = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      deleteMutation.mutate(POST_KEY);
      navigate('/');
    }
  };

  const UpdateMutation = useMutation(updateArticle, {
    onError: (error) => {},
  });

  const onClickUpdateButton = () => {
    UpdateMutation.mutate();
  };

  return (
    <div>
      {articles.map((article: any) => (
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
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 12px;
  word-break: keep-all;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
`;
const Title = styled.h2``;
const Content = styled.p``;

export default Article;

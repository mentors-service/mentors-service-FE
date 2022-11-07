import useMarkdown from '@hooks/contexts/useMarkdown';
import styled from 'styled-components';

const MarkdownEditor = () => {
  const { markdownText, setMarkdownText } = useMarkdown();

  const handleEditorChage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.currentTarget.value);
  };

  return (
    <Textarea onChange={handleEditorChage} value={markdownText} cols={20} rows={20} placeholder='내용을 입력해주세요' />
  );
};

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.$gray};
`;

export default MarkdownEditor;

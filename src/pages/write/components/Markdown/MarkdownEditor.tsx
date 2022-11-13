import useMarkdown from '@hooks/contexts/Markdown/useMarkdown';
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

const Textarea = styled.textarea<{ value: string }>`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 2px solid ${({ value, theme }) => (value ? theme.colors.$secondary : theme.colors.$gray)};
  border-radius: 10px;
  transition: 0.3s;
`;

export default MarkdownEditor;

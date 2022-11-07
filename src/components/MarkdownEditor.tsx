import styled from 'styled-components';
import useMarkdown from '../hooks/contexts/useMarkdown';

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
  padding: 10px;
`;

export default MarkdownEditor;

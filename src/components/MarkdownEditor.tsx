import styled from 'styled-components';
import useMarkdown from '../hooks/contexts/useMarkdown';

const MarkdownEditor = () => {
  const { markdownText, setMarkdownText } = useMarkdown();

  const handleEditorChage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.currentTarget.value);
  };

  return <Textarea onChange={handleEditorChage} value={markdownText} cols={30} rows={30} placeholder='Description' />;
};

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
`;

export default MarkdownEditor;

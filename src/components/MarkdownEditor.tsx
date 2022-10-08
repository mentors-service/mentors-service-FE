import useMarkdown from '../hooks/contexts/useMarkdown';

const MarkdownEditor = () => {
  const { markdownText, setMarkdownText } = useMarkdown();

  const handleEditorChage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.currentTarget.value);
  };

  return <textarea onChange={handleEditorChage} value={markdownText} name='temp' id='temp' cols={30} rows={10} />;
};

export default MarkdownEditor;

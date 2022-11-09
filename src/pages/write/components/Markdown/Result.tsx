import useMarkdown from '@hooks/contexts/Markdown/useMarkdown';
import ReactMarkdown from 'react-markdown';

const Result = () => {
  const { markdownText } = useMarkdown();

  const renderers = {
    p: ({ ...props }) => <p style={{ width: '100%', wordBreak: 'break-word', display: 'flex' }} {...props} />,
    img: ({ ...props }) => <img alt={props.alt} style={{ maxWidth: '260px', margin: 'auto' }} {...props} />,
  };

  return <ReactMarkdown components={renderers}>{markdownText}</ReactMarkdown>;
};

export default Result;

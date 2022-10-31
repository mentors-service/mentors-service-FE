import ReactMarkdown from 'react-markdown';
import useMarkdown from '../hooks/contexts/useMarkdown';

const Result = () => {
  const { markdownText } = useMarkdown();

  const renderers = {
    img: ({ ...props }) => <img alt={props.alt} style={{ maxWidth: '260px' }} {...props} />,
  };

  return <ReactMarkdown components={renderers}>{markdownText}</ReactMarkdown>;
};

export default Result;

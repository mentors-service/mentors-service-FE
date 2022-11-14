import useMarkdown from '@hooks/contexts/Markdown/useMarkdown';
import { useState } from 'react';
import styled from 'styled-components';

const MarkdownEditor = () => {
  const [toggle, setToggle] = useState(false);

  const { setMarkdownText } = useMarkdown();

  const handleSelect = () => {
    setToggle(true);
  };

  const handleBlur = () => {
    setToggle(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.currentTarget.value);
  };

  return (
    <Textarea
      onSelect={handleSelect}
      onBlur={handleBlur}
      onChange={handleChange}
      $toggle={toggle}
      cols={20}
      rows={20}
      placeholder='내용을 입력해주세요'
    />
  );
};

const Textarea = styled.textarea<{ $toggle: boolean }>`
  width: 100%;
  padding: 10px;
  border: 2px solid ${({ $toggle, theme }) => ($toggle ? theme.colors.$secondary : theme.colors.$gray)};
  border-radius: 10px;
  transition: 0.3s;
`;

export default MarkdownEditor;

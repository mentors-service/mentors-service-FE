import useMarkdown from '@hooks/contexts/Markdown/useMarkdown';
import { useRef } from 'react';
import styled from 'styled-components';

const ImageUpload = () => {
  const imageUploadRef = useRef<HTMLInputElement>(null);

  const { setMarkdownText } = useMarkdown();

  const handleChangeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files || !e.currentTarget.files.length) return;

    const imgMarkdownURL = `![](${URL.createObjectURL(e.currentTarget.files[0])})`;

    setMarkdownText((prev) => prev + imgMarkdownURL);
    e.currentTarget.value = '';
  };

  const handleClickImageUpload = () => {
    if (!imageUploadRef.current) return;

    imageUploadRef.current.click();
  };

  return (
    <div>
      <input type='file' ref={imageUploadRef} onChange={handleChangeImageUpload} style={{ display: 'none' }} />

      <Button type='button' onClick={handleClickImageUpload}>
        Image Upload
      </Button>
    </div>
  );
};

const Button = styled.button`
  width: 100%;
  height: 34px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$secondary};
  border-radius: 10px;
`;

export default ImageUpload;

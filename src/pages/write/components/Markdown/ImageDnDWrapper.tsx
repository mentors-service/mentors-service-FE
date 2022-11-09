import useMarkdown from '@hooks/contexts/Markdown/useMarkdown';
import { useState } from 'react';
import styled from 'styled-components';

interface ImageDnDWrapperProps {
  children: React.ReactNode;
}

const ImageDnDWrapper = ({ children }: ImageDnDWrapperProps) => {
  const [imageUpload, setImageUpload] = useState(false);
  const { setMarkdownText } = useMarkdown();

  const handleImageDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setImageUpload((prev) => !prev);
  };

  const handleImageDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setImageUpload((prev) => !prev);
  };

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const imgMarkdownURL = `![](${URL.createObjectURL(e.dataTransfer.files[0])})`;

    setMarkdownText((prev) => prev + imgMarkdownURL);
    setImageUpload(false);
  };

  return (
    <Wrapper onDragEnter={handleImageDragEnter} onDragLeave={handleImageDragLeave} onDrop={handleImageDrop}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default ImageDnDWrapper;

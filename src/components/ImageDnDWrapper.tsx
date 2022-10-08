import { useState } from 'react';
import useMarkdown from '@hooks/contexts/useMarkdown';

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
    setImageUpload((prev) => !prev);
  };

  return (
    <div onDragEnter={handleImageDragEnter} onDragLeave={handleImageDragLeave} onDrop={handleImageDrop}>
      {children}
    </div>
  );
};

export default ImageDnDWrapper;

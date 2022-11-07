import { useRef } from 'react';
import useMarkdown from '../hooks/contexts/useMarkdown';

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

      <button type='button' onClick={handleClickImageUpload}>
        Image Upload
      </button>
    </div>
  );
};

export default ImageUpload;

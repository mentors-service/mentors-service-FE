import { useState } from 'react';
import * as S from './tab.style';

const MYACTIVITY_LIST = ['Article', 'Comment', 'Scrap'];

const MeTab = () => {
  const [currentTab, setCurrentTab] = useState<string>('');

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.innerText);
  };

  return (
    <S.TabNav>
      <S.TabList>
        {MYACTIVITY_LIST.map((item) => (
          <S.TabItem key={item}>
            <S.TabButton onClick={handleClickButton}>{item}</S.TabButton>
          </S.TabItem>
        ))}
      </S.TabList>

      <S.TabBottom currentTab={currentTab} />
    </S.TabNav>
  );
};

export default MeTab;

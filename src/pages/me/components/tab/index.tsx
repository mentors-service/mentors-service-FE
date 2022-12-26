import * as S from './tab.style';

interface Props {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  currentTab: string;
}

const MeTab = ({ setCurrentTab, currentTab }: Props) => {
  const MYACTIVITY_LIST = ['Article', 'Comment', 'Scrap'];

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

import React, { useMemo, useState } from 'react';
import DropdownContext from '@hooks/contexts/Dropdown/dropdownContext';
import Button from '@components/Dropdown/Button';
import Text from '@components/Dropdown/Text';
import Icon from '@components/Dropdown/Icon';
import List from '@components/Dropdown/List';
import styled from 'styled-components';

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown = ({ children }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [dropdownText, setDropdownText] = useState('필터링');

  const handleClickDropdown = () => {
    setIsOpened((prev) => !prev);
  };

  const handleClickContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDropdownText(e.currentTarget.innerText);
    setIsOpened(false);
  };

  const contextValue = useMemo(
    () => ({ isOpened, handleClickDropdown, dropdownText, handleClickContent }),
    [isOpened, dropdownText]
  );

  return (
    <DropdownContext.Provider value={contextValue}>
      <DropdownWrapper>{children}</DropdownWrapper>
    </DropdownContext.Provider>
  );
};

Dropdown.Button = Button;
Dropdown.Text = Text;
Dropdown.Icon = Icon;
Dropdown.List = List;

const DropdownWrapper = styled.div`
  position: relative;
`;

export default Dropdown;

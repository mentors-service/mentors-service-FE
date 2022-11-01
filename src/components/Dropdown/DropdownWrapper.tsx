import React, { useMemo, useState } from 'react';
import DropdownContext from '@hooks/contexts/dropdownContext';
import Button from '@components/Dropdown/Button';
import Text from '@components/Dropdown/Text';
import Icon from '@components/Dropdown/Icon';
import List from '@components/Dropdown/List';

interface DropdownWrapperProps {
  children: React.ReactNode;
}

const DropdownWrapper = ({ children }: DropdownWrapperProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [dropdownText, setDropdownText] = useState('Filter');

  const handleClickDropdown = () => {
    setIsOpened((prev) => !prev);
  };

  const handleClickContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDropdownText(e.currentTarget.innerText);
    setIsOpened((prev) => !prev);
  };

  const contextValue = useMemo(
    () => ({ isOpened, handleClickDropdown, dropdownText, handleClickContent }),
    [isOpened, dropdownText]
  );

  return <DropdownContext.Provider value={contextValue}>{children}</DropdownContext.Provider>;
};

DropdownWrapper.Button = Button;
DropdownWrapper.Text = Text;
DropdownWrapper.Icon = Icon;
DropdownWrapper.List = List;

export default DropdownWrapper;

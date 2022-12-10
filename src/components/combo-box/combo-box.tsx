import React, { useState } from 'react';
import s from './combo-box.module.css';
import { AiFillDelete, AiOutlineSearch } from 'react-icons/ai';
import { ListItemType } from '../../app';

type propsType = {
  itemList: Array<ListItemType>;
  onInputChange: (currentValue: string) => void;
  value: string;
};

export function ComboBox({ itemList, onInputChange, value }: propsType) {
  const [isFolded, setIsFolded] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] =
    useState<string>('Type to search');

  const onLiClickHandler = (name: string) => {
    setIsFolded(true);
    setSelectedOption(name);
    onInputChange(name);
  };

  const onInputKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onInputChange(selectedOption);
      setIsFolded(true);
    }
  };

  const onMouseOverHandler = (name: string) => {
    setSelectedOption(name);
  };

  const onInputBlurHandler = () => {
    setSelectedOption('Type to search');
    setIsFolded(true);
  };

  const onDeleteClickHandler = () => {
    onInputChange('');
    setSelectedOption('Type to search');
  };

  return (
    <div className={s.comboBoxContainer}>
      <div className={s.selectLine}>
        <AiOutlineSearch size={18} className={s.searchSvg} />
        <input
          onKeyUp={onInputKeyUpHandler}
          onClick={() => {
            setIsFolded(false);
          }}
          onChange={(e) => onInputChange(e.currentTarget.value)}
          value={selectedOption !== 'Type to search' ? selectedOption : value}
          type="text"
          placeholder={selectedOption}
          onBlur={onInputBlurHandler}
        />
        <AiFillDelete
          size={15}
          className={s.bin}
          onClick={onDeleteClickHandler}
        />
      </div>
      <div>
        <ul
          className={`${
            isFolded ? s.dropDownListFoldedStyle : s.dropDownListStyle
          }`}
        >
          {itemList.map((i) => (
            <li
              key={i.id}
              onMouseOver={() => {
                onMouseOverHandler(i.name);
              }}
              className={`${
                i.name.toLowerCase().includes(value.toLowerCase())
                  ? s.displayItems
                  : s.hideItems
              }`}
              onMouseDown={() => {
                onLiClickHandler(i.name);
              }}
            >
              {i.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

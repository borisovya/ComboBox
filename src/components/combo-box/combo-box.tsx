import React, { useEffect, useState } from 'react';
import s from './combo-box.module.css';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

export type ListItemType = {
  id: number;
  name: string;
};

const itemList: Array<ListItemType> = [
  {
    id: 1,
    name: 'MOSCOW'
  },
  {
    id: 2,
    name: 'KALUGA'
  },
  {
    id: 3,
    name: 'TULA'
  },
  {
    id: 4,
    name: 'BRYANSK'
  },
  {
    id: 5,
    name: 'SOCHI'
  },
  {
    id: 6,
    name: 'EKATERINBURG'
  },
  {
    id: 7,
    name: 'ROSTOV'
  },
  {
    id: 8,
    name: 'VORONEZH'
  },
  {
    id: 9,
    name: 'MINSK'
  }
];

export function ComboBox() {
  const [list, setList] = useState<Array<ListItemType>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isFolded, setIsFolded] = useState<boolean>(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setList(itemList);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  });

  const onChangeHandler = (currentValue: string) => {
    setInputValue(currentValue);
  };

  const onLiClickHandler = (name: string) => {
    setInputValue(name);
    setIsFolded(true);
  };

  return (
    <div className={s.comboBoxContainer}>
      <div className={s.selectLine}>
        <AiOutlineSearch size={18} className={s.searchSvg} />
        <input
          onClick={() => {
            setIsFolded(false);
          }}
          onChange={(e) => onChangeHandler(e.currentTarget.value)}
          value={inputValue}
          type="text"
          placeholder={'Enter something'}
        />
        {isFolded ? (
          <BiChevronDown
            onClick={() => setIsFolded(!isFolded)}
            size={20}
            className={s.biChevronSvg}
          />
        ) : (
          <BiChevronUp
            onClick={() => setIsFolded(!isFolded)}
            size={20}
            className={s.biChevronSvg}
          />
        )}
      </div>
      <ul
        className={`${
          isFolded ? s.dropDownListFoldedStyle : s.dropDownListStyle
        }`}
      >
        {list.map((l) => (
          <li
            key={l.id}
            className={`${
              l.name.toLowerCase().includes(inputValue.toLowerCase())
                ? s.displayItems
                : s.hideItems
            }`}
            onClick={() => {
              onLiClickHandler(l.name);
            }}
          >
            {l.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

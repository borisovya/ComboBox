import React, { useEffect, useState } from 'react';
import s from './combo-box.module.css';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { ListItemType } from '../../app';
import { RxCross1 } from 'react-icons/all';

type propsType = {
  itemList: Array<ListItemType>;
  onInputChange: (currentValue: string) => void;
  value: string;
};

export function ComboBox({ itemList, onInputChange, value }: propsType) {
  const [isFolded, setIsFolded] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] =
    useState<string>('Type to search');

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const onLiClickHandler = (name: string) => {
    setIsFolded(true);
    onInputChange(name);
  };

  const onChevronDownClickHandler = () => {
    setIsFolded(false);
  };

  const onChevronUpClickHandler = () => {
    setIsFolded(true);
    setSelectedOption('Type to search');
  };

  const onEnterDownHandled = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsFolded(!isFolded);
    }
  };

  const onLiEnterDownHandled = (
    e: React.KeyboardEvent<HTMLLIElement>,
    name: string
  ) => {
    if (e.key === 'Enter') {
      onInputChange(name);
      setIsFolded(!isFolded);
    }
  };

  const onMouseOverHandler = (name: string) => {
    setSelectedOption(name);
  };

  const onInputBlurHandler = () => {
    setIsFolded(true);
    setSelectedOption('');
  };

  return (
    <div className={s.comboBoxContainer}>
      <div className={s.selectLine}>
        <AiOutlineSearch size={18} className={s.searchSvg} />
        <input
          onClick={() => {
            setIsFolded(false);
          }}
          onChange={(e) => onInputChange(e.currentTarget.value)}
          onKeyDown={onEnterDownHandled}
          value={selectedOption}
          type="text"
          placeholder={'Type to search'}
          onBlur={onInputBlurHandler}
        />
        <RxCross1
          size={15}
          className={s.cross}
          onClick={() => onInputChange('')}
        />
        {isFolded ? (
          <BiChevronDown
            onClick={onChevronDownClickHandler}
            size={20}
            className={s.biChevronSvg}
          />
        ) : (
          <BiChevronUp
            onClick={onChevronUpClickHandler}
            size={20}
            className={s.biChevronSvg}
          />
        )}
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
              onKeyDown={(e) => {
                onLiEnterDownHandled(e, i.name);
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

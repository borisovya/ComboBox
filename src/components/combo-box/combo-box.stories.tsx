import { ComboBox } from './combo-box';
import { useState } from 'react';

export default {
  title: 'ComboBox'
};

export type ListItemType = {
  id: number;
  name: string;
};

const itemList: Array<ListItemType> = [
  {
    id: 1,
    name: 'Moscow'
  },
  {
    id: 2,
    name: 'Kaluga'
  },
  {
    id: 3,
    name: 'Tula'
  },
  {
    id: 4,
    name: 'Bryansk'
  },
  {
    id: 5,
    name: 'Sochi'
  },
  {
    id: 6,
    name: 'Ekaterinburg'
  },
  {
    id: 7,
    name: 'Rostov-on-Don'
  },
  {
    id: 8,
    name: 'Voronezh'
  },
  {
    id: 9,
    name: 'Minsk, Belarus'
  }
];

export function ComboBoxComponent() {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandler = (currentValue: string) => {
    setInputValue(currentValue);
  };

  return (
    <ComboBox
      itemList={itemList}
      onInputChange={onChangeHandler}
      value={inputValue}
    />
  );
}

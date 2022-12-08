import React, { useState } from 'react';
import { ComboBox } from './components/combo-box';

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

export function App() {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandler = (currentValue: string) => {
    setInputValue(currentValue);
  };

  return (
    <div>
      <ComboBox
        itemList={itemList}
        onInputChange={onChangeHandler}
        value={inputValue}
      />
    </div>
  );
}

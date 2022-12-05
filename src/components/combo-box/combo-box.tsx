import React, {useEffect, useState} from 'react'
import s from './combo-box.module.css'

export type ListItemType = {
  id: number,
  name: string
}

const itemList: Array<ListItemType> = [
  {
    id: 1,
    name: 'option1'
  },
  {
    id: 2,
    name: 'option2'
  },
  {
    id: 3,
    name: 'option3'
  },
  {
    id: 4,
    name: 'option4'
  },
  {
    id: 5,
    name: 'option5'
  },
  {
    id: 6,
    name: 'option6'
  },
  {
    id: 7,
    name: 'option7'
  },
  {
    id: 8,
    name: 'option8'
  },
  {
    id: 9,
    name: 'option9'
  },
]


export function ComboBox() {

  const [list, setList] = useState<Array<ListItemType>>([])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setList(itemList)
    }, 500)
    return () => {
      clearTimeout(timeOut)
    }
  })

  return <div className={s.comboBoxContainer}>
    <div className={s.selectLine}> Selection list</div>
    <ul className={s.dropDownListStyle}>
      {list.map(l => <li key={l.id}>{l.name}</li>)}
    </ul>
  </div>;
}

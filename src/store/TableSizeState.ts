import { atom } from 'recoil'

export const TableSizeState = atom({
  key: 'sheetSize',
  default: {
    rows: 5,
    columns: 5,
  },
})

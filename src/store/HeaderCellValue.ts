import { atom, selector } from 'recoil'
import { TableSizeState } from './TableSizeState'

const rowAtom = atom({
  key: 'rowAtom',
  default: [],
})

const columnAtom = atom({
  key: 'columnAtom',
  default: [],
})

export const RowHeaderCellValues = selector({
  key: 'RowHeader',
  get: ({ get }) => get(rowAtom),
  set: ({ get, set }, newValue) => {
    if (get(rowAtom).length < get(TableSizeState).rows) {
      const fillerArrayLength = get(TableSizeState).rows - get(rowAtom).length
      const fillerArray = [...Array(fillerArrayLength)].map(value => '')
      set(rowAtom, [...get(rowAtom), ...fillerArray])
    }
    set(rowAtom, newValue)
  },
})

export const ColumnHeaderCellValues = selector({
  key: 'ColumnHeader',
  get: ({ get }) => get(columnAtom),
  set: ({ get, set }, newValue) => {
    if (get(columnAtom).length < get(TableSizeState).columns) {
      const fillerArrayLength =
        get(TableSizeState).columns - get(columnAtom).length
      const fillerArray = [...Array(fillerArrayLength)].map(value => '')
      set(columnAtom, [...get(columnAtom), ...fillerArray])
    }
    set(columnAtom, newValue)
  },
})

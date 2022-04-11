import { atom, selector } from 'recoil'
import { TableSizeState } from './TableSizeState'

const rowAtom = atom<string[]>({
  key: 'rowAtom',
  default: [],
})

const columnAtom = atom<string[]>({
  key: 'columnAtom',
  default: [],
})

export const RowHeaderCellValues = selector<string[]>({
  key: 'RowHeader',
  get: ({ get }) => {
    if (get(rowAtom).length < get(TableSizeState).rows) {
      const fillerArrayLength = get(TableSizeState).rows - get(rowAtom).length
      const fillerArray = [...Array(fillerArrayLength)].map(value => '')
      return [...get(rowAtom), ...fillerArray]
    } else {
      return get(rowAtom)
    }
  },
  set: ({ set }, newValue) => set(rowAtom, newValue),
})

export const ColumnHeaderCellValues = selector<string[]>({
  key: 'ColumnHeader',
  get: ({ get }) => {
    if (get(columnAtom).length < get(TableSizeState).columns) {
      const fillerArrayLength =
        get(TableSizeState).columns - get(columnAtom).length
      const fillerArray = [...Array(fillerArrayLength)].map(value => '')
      return [...get(columnAtom), ...fillerArray]
    } else {
      return get(columnAtom)
    }
  },
  set: ({ set }, newValue) => set(columnAtom, newValue),
})

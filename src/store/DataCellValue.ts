import { atom } from 'recoil'

export const DataCellValue = (cellId: string) =>
  logCells(cellId, () =>
    atom({
      key: `${cellId}`,
      default: '',
    })
  )

const cells: any = {}

const logCells = (cellId: string, atomFunction: any) => {
  if (cells[cellId]) return cells[cellId]

  cells[cellId] = atomFunction()
  return cells[cellId]
}

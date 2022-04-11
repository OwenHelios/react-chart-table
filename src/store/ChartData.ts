import { selector } from 'recoil'
import { DataCellValue } from './DataCellValue'
import { ColumnHeaderCellValues, RowHeaderCellValues } from './HeaderCellValue'
import { TableSizeState } from './TableSizeState'

var colors = []

export const ChartData = selector({
  key: 'ChartData',
  get: ({ get }) => {
    const columnLabels = get(ColumnHeaderCellValues)
    const rowLabels = get(RowHeaderCellValues)
    const tableSize = get(TableSizeState)

    if (colors.length === 0) {
      rowLabels.forEach(r => colors.push(getRandomColor()))
    }

    const data = {
      labels: columnLabels.slice(0, tableSize.columns),
      datasets: [...Array(tableSize.rows)].map((rowLabel, rowIndex) => ({
        label: rowLabel,
        data: [...Array(tableSize.columns)].map((columnLabel, columnIndex) =>
          Number(get(DataCellValue(`${rowIndex},${columnIndex}`)))
        ),
        backgroundColor: colors[rowIndex],
        borderColor: colors[rowIndex],
      })),
    }
    return data
  },
})

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

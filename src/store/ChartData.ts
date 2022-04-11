import { selector } from 'recoil'
import { DataCellValue } from './DataCellValue'
import { ColumnHeaderCellValues, RowHeaderCellValues } from './HeaderCellValue'

var colors = []

export const ChartData = selector({
  key: 'ChartData',
  get: ({ get }) => {
    const columnLabels = get(ColumnHeaderCellValues)
    const rowLabels = get(RowHeaderCellValues)

    if (colors.length === 0) {
      rowLabels.forEach(r => colors.push(getRandomColor()))
    }

    const data = {
      labels: columnLabels,
      datasets: rowLabels.map((rowLabel, rowIndex) => ({
        label: rowLabel,
        data: columnLabels.map((columnLabel, columnIndex) =>
          get(DataCellValue(`${rowIndex},${columnIndex}`))
        ),
        backgroundColor: colors[rowIndex],
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

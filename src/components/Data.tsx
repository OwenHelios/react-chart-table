import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'

import { useRecoilState } from 'recoil'
import { TableSizeState } from '../store/TableSizeState'
import ColumnHeaderCell from './ColumnHeaderCell'
import DataCell from './DataCell'
import RowHeaderCell from './RowHeaderCell'
import StackedBar from './StackedBar'

export default function Data() {
  const [tableSize, setTableSize] = useRecoilState(TableSizeState)

  const addRow = () => {
    setTableSize({ ...tableSize, rows: tableSize.rows + 1 })
  }
  const addColumn = () => {
    setTableSize({ ...tableSize, columns: tableSize.columns + 1 })
  }

  return (
    <div>
      <StackedBar />
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              {[...Array(tableSize.columns)].map((column, columnIndex) => (
                <TableCell align="right" key={columnIndex}>
                  <ColumnHeaderCell columnIndex={columnIndex} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(tableSize.rows)].map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <RowHeaderCell rowIndex={rowIndex} />
                </TableCell>
                {[...Array(tableSize.columns)].map((column, columnIndex) => (
                  <TableCell align="right" key={columnIndex}>
                    <DataCell cellId={`${rowIndex},${columnIndex}`} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addColumn}>Add Column</button>
    </div>
  )
}

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
import DataCell from './DataCell'
import StackedBar from './StackedBar'

export default function Data() {
  const [tableSize, setTableSize] = useRecoilState(TableSizeState)

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
                  <DataCell cellId={`columnHead_${columnIndex}`} />
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
                  <DataCell cellId={`rowHead_${rowIndex}`} />
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
    </div>
  )
}

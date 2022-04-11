import { Add, Remove } from '@mui/icons-material'
import { IconButton, Popover } from '@mui/material'
import { useRef, useState } from 'react'

import { useRecoilState } from 'recoil'
import { TableSizeState } from '../store/TableSizeState'
import ColumnHeaderCell from './ColumnHeaderCell'
import DataCell from './DataCell'
import RowHeaderCell from './RowHeaderCell'

export default function BarTable() {
  const [tableSize, setTableSize] = useRecoilState(TableSizeState)

  const [addRowPop, setAddRowPop] = useState(false)
  const [removeRowPop, setRemoveRowPop] = useState(false)
  const [addColPop, setAddColPop] = useState(false)
  const [removeColPop, setRemoveColPop] = useState(false)

  const addRowBtn = useRef(null)
  const removeRowBtn = useRef(null)
  const addColBtn = useRef(null)
  const removeColBtn = useRef(null)

  const addRow = () => {
    setTableSize({ ...tableSize, rows: tableSize.rows + 1 })
  }
  const addColumn = () => {
    setTableSize({ ...tableSize, columns: tableSize.columns + 1 })
  }
  const removeRow = () => {
    setTableSize({ ...tableSize, rows: tableSize.rows - 1 })
  }
  const removeColumn = () => {
    setTableSize({ ...tableSize, columns: tableSize.columns - 1 })
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>data</th>
            {[...Array(tableSize.columns)].map((column, columnIndex) => (
              <th key={columnIndex}>
                <ColumnHeaderCell columnIndex={columnIndex} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(tableSize.rows)].map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>
                <RowHeaderCell rowIndex={rowIndex} />
              </th>
              {[...Array(tableSize.columns)].map((column, columnIndex) => (
                <td key={columnIndex}>
                  <DataCell cellId={`${rowIndex},${columnIndex}`} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row-buttons">
        <IconButton
          ref={addRowBtn}
          onClick={addRow}
          onMouseEnter={() => setAddRowPop(true)}
          onMouseLeave={() => setAddRowPop(false)}
        >
          <Add />
        </IconButton>
        <IconButton
          ref={removeRowBtn}
          onClick={removeRow}
          onMouseEnter={() => setRemoveRowPop(true)}
          onMouseLeave={() => setRemoveRowPop(false)}
        >
          <Remove />
        </IconButton>

        {addRowPop && (
          <Popover
            sx={{
              pointerEvents: 'none',
            }}
            open={true}
            anchorEl={addRowBtn.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <span>Add Row</span>
          </Popover>
        )}
        {removeRowPop && (
          <Popover
            sx={{
              pointerEvents: 'none',
            }}
            open={true}
            anchorEl={removeRowBtn.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <span>Remove Row</span>
          </Popover>
        )}
      </div>
      <div className="column-buttons">
        <IconButton
          ref={addColBtn}
          onClick={addColumn}
          onMouseEnter={() => setAddColPop(true)}
          onMouseLeave={() => setAddColPop(false)}
        >
          <Add />
        </IconButton>
        <IconButton
          ref={removeColBtn}
          onClick={removeColumn}
          onMouseEnter={() => setRemoveColPop(true)}
          onMouseLeave={() => setRemoveColPop(false)}
        >
          <Remove />
        </IconButton>

        {addColPop && (
          <Popover
            sx={{
              pointerEvents: 'none',
            }}
            open={true}
            anchorEl={addColBtn.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <span>Add Column</span>
          </Popover>
        )}
        {removeColPop && (
          <Popover
            sx={{
              pointerEvents: 'none',
            }}
            open={true}
            anchorEl={removeColBtn.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <span>Remove Column</span>
          </Popover>
        )}
      </div>
    </div>
  )
}

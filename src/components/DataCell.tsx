import type { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { DataCellValue } from '../store/DataCellValue'

type Props = {
  cellId: string
}

const DataCell: React.FC<Props> = ({ cellId }) => {
  const [cellValue, setCellValue] = useRecoilState<string>(
    DataCellValue(cellId)
  )
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCellValue(e.target.value)
  }
  return (
    <div>
      <input type="text" value={cellValue} onChange={handleInput} />
    </div>
  )
}

export default DataCell

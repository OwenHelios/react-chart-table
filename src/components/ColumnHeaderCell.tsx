import type { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { ColumnHeaderCellValues } from '../store/HeaderCellValue'

type Props = {
  columnIndex: number
}

const ColumnHeaderCell: React.FC<Props> = ({ columnIndex }) => {
  const [cellValues, setCellValues] = useRecoilState(ColumnHeaderCellValues)
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCellValues(prev =>
      prev.map((value, index) =>
        index === columnIndex ? e.target.value : value
      )
    )
  }
  return (
    <div>
      <input
        type="text"
        value={cellValues[columnIndex]}
        onChange={handleInput}
      />
    </div>
  )
}

export default ColumnHeaderCell

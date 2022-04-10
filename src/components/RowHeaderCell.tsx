import type { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { RowHeaderCellValues } from '../store/HeaderCellValue'

type Props = {
  rowIndex: number
}

const RowHeaderCell: React.FC<Props> = ({ rowIndex }) => {
  const [cellValues, setCellValues] = useRecoilState(RowHeaderCellValues)
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCellValues(prev =>
      prev.map((value, index) => (index === rowIndex ? e.target.value : value))
    )
  }
  return (
    <div>
      <input type="text" value={cellValues[rowIndex]} onChange={handleInput} />
    </div>
  )
}

export default RowHeaderCell

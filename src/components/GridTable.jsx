import { useSelector } from "react-redux";

const GridTable = () => {
  const { grid } = useSelector((state) => state.game)

  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              <td key={colIndex}>
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default GridTable;

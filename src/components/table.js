import React from "react";
import { useTable } from 'react-table'

const Table = ({tableData, columnData}) => {
  const data = React.useMemo(
    () => tableData,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const columns = React.useMemo(
    () => columnData,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <>
    <div className="shadow sm:-mx-40 border-b border-gray-200 overflow-x-auto sm:rounded-lg not-prose min-w-full">
        <table {...getTableProps()} className="!table-fixed min-w-200 divide-y divide-gray-200 !my-0">
        <thead className="bg-gray-50">
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th
                    {...column.getHeaderProps()}
                    className="px-6 !py-8 text-left text-xs font-bold text-gray-500 !text-sm uppercase tracking-wider"
                >
                    {column.render('Header')}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIndex) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.cells.map(cell => {
                    return (
                    <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 text-sm text-gray-500"
                    >
                        {cell.render('Cell')}
                    </td>
                    )
                })}
                </tr>
            )
            })}
        </tbody>
        </table>
     </div>
    </>
  );
};

export default Table;

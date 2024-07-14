import React, { useState } from 'react';
import { useTable, useSortBy, usePagination, useFilters, useGlobalFilter } from 'react-table';
import './Table.css';

// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length;

    return (
        <span>
            Search:{' '}
            <input
                value={globalFilter || ''}
                onChange={e => {
                    setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: '1.1rem',
                    border: '0',
                }}
            />
        </span>
    );
}

const Table = ({ columns, data }) => {
    const [filterInput, setFilterInput] = useState("");

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page, // Instead of using 'rows', we'll use 'page' for pagination
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }, // Pass our default table state
        },
        useFilters, // Use filters plugin hook
        useGlobalFilter, // Use global filter plugin hook
        useSortBy, // Use sortBy plugin hook
        usePagination // Use pagination plugin hook
    );

    return (
        <>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => {
                                const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
                                return (
                                    <th key={key} {...rest}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        const { key, ...restRowProps } = row.getRowProps();
                        return (
                            <tr key={key} {...restRowProps}>
                                {row.cells.map(cell => {
                                    const { key, ...restCellProps } = cell.getCellProps();
                                    return (
                                        <td key={key} {...restCellProps}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
                <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Table;

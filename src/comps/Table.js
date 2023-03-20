import { Table2, Column, Cell, ColumnHeaderCell2 } from "@blueprintjs/table";

import { TableButtonActionRail } from "./TableButtonActionRail";

export const Table = () => {
  const headerCells = ["Name", "Age", "Job", "Happy"];
  const people = [
    {
      Name: "Mike",
      Age: 20,
      Job: "dogsbody",
      Happy: "Very",
    },
    {
      Name: "Tom",
      Age: 30,
      Job: "manager",
      Happy: "nope",
    },
    {
      Name: "John",
      Age: 26,
      Job: "binman",
      Happy: "super",
    },
    {
      Name: "Jenny",
      Age: 34,
      Job: "nurse",
      Happy: "kinda",
    },
  ];

  const cellRenderer = (rowIndex, columnIndex) => {
    let key = headerCells[columnIndex];

    return <Cell>{people[rowIndex][key]}</Cell>;
  };

  const columnHeaderCellRenderer = (columnIndex) => {
    return <ColumnHeaderCell2 name={headerCells[columnIndex]} />;
  };

  return (
    <Table2 numRows={4} className={"table_2"}>
      <Column
        columnHeaderCellRenderer={columnHeaderCellRenderer}
        cellRenderer={cellRenderer}
      />
      <Column
        columnHeaderCellRenderer={columnHeaderCellRenderer}
        cellRenderer={cellRenderer}
      />
      <Column
        columnHeaderCellRenderer={columnHeaderCellRenderer}
        cellRenderer={cellRenderer}
      />
      <Column
        columnHeaderCellRenderer={columnHeaderCellRenderer}
        cellRenderer={cellRenderer}
      />
    </Table2>
  );
};

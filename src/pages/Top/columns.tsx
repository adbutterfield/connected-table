import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Pokemon>();

const columns: Columns<Pokemon> = [
  columnHelper.accessor((row) => row.name, {
    id: "name",
    cell: (info) => info.getValue(),
    header: () => <span>NAME</span>,
  }),
  columnHelper.accessor((row) => row.url, {
    id: "id",
    cell: (info) =>
      (info
        .getValue()
        .match(/https:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)\//) || [])[1],
    header: () => <span>ID</span>,
  }),
];

export default columns;

import { createColumnHelper } from "@tanstack/react-table";
import Form from "./components/Form";
import ConnectedTable from "./components/ConnectedTable";

const columnHelper = createColumnHelper<Pokemon>();

const baseURL = "https://pokeapi.co/api/v2";

const fetchData: FetchData<PokeapiResponse> = async (
  searchParams?: URLSearchParams
) => {
  const res = await fetch(
    `${baseURL}/pokemon${searchParams ? `?${searchParams?.toString()}` : ""}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getDataFromResponse = (
  response: PokeapiResponse | undefined
): Pokemon[] | null => {
  if (response?.results) {
    return response.results;
  }
  return null;
};

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

export default function App() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Form />
      <ConnectedTable<Pokemon, PokeapiResponse>
        columns={columns}
        fetchData={fetchData}
        getDataFromResponse={getDataFromResponse}
      />
    </main>
  );
}

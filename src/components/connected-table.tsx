import { useQuery } from "@tanstack/react-query";
import Table from "./table";

const baseURL = "https://pokeapi.co/api/v2";

const fetchData = async (searchParams?: URLSearchParams) => {
  const res = await fetch(
    `${baseURL}/pokemon${searchParams ? `?${searchParams?.toString()}` : ""}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

type ConnectedTableProps = {
  searchParams?: URLSearchParams;
};

const ConnectedTable: React.FC<ConnectedTableProps> = ({ searchParams }) => {
  const { data, error } = useQuery(
    [`table-data-${searchParams?.toString()}`],
    () => fetchData(searchParams),
    {
      refetchOnWindowFocus: false,
    }
  );

  return <Table data={data?.results || null} />;
};

export default ConnectedTable;

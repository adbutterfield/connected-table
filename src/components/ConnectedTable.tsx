import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Table from "./Table";

type ConnectedTableProps<T, R> = {
  columns: Columns<T>;
  fetchData: FetchData<R>;
  getDataFromResponse: GetDataFromResponse<T, R>;
  queryKey: string;
};

function ConnectedTable<T, R>({
  columns,
  fetchData,
  getDataFromResponse,
  queryKey,
}: ConnectedTableProps<T, R>) {
  /**
   * Changes to searchParams will cause the component to re-render.
   * So if we did like `<Table data={data?.results || null} />`,
   * the table would get passed null and re-render with no data,
   * before re-rendering again with the new data once it comes back from the API.
   * To prevent that, we need to keep a copy of the table data,
   * and update it when the data returned by useQuery changes.
   * */
  const [searchParams] = useSearchParams();
  const [localData, setLocalData] = useState<T[] | null>(null);

  const { data } = useQuery<R>(
    [`${queryKey}-${searchParams?.toString()}`],
    () => fetchData(searchParams)
  );

  useEffect(() => {
    if (data) {
      setLocalData(getDataFromResponse(data));
    }
  }, [data, getDataFromResponse]);

  return <Table data={localData} columns={columns} />;
}

export default ConnectedTable;

type Pokemon = {
  name: string;
  url: string;
};

type PokeapiResponse = {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
};

type Columns<T> = import("@tanstack/react-table").ColumnDef<T, any>[];
type FetchData<R> = (searchParams?: URLSearchParams) => Promise<R>;
type GetDataFromResponse<T, R> = (response: R | undefined) => T[] | null;

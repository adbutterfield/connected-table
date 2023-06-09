# "Table go fetch your own data!" example

## Why?

- Decouple form from table
- Gracefully handle page refreshes
- Create sharable URLs

## How?

`<Form />` component updates the URL with `useSearchParams` hook. `<ConnectedTable />` uses `useSearchParams` to react to changes in the URL, fetching new data, and passing it to `<Table />`.

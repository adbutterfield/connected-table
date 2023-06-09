import Form from "./components/form";
import ConnectedTable from "./components/connected-table";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Form />
      <ConnectedTable />
    </main>
  );
}

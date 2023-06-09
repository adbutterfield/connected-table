import Form from "./components/Form";
import ConnectedTable from "./components/ConnectedTable";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Form />
      <ConnectedTable />
    </main>
  );
}

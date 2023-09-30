import { api } from "libs";

export default async function Page() {
  const { data: testData, error: testError } = await api.test.get();

  if (testError) return <h1>Something went wrong</h1>;

  return (
    <main className="flex justify-center items-center w-full min-h-screen">
      <div>{testData && testData[0].email}</div>
    </main>
  );
}

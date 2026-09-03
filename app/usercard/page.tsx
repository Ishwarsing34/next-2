import axios from "axios";

export default async function usercard() {
  const response = await axios.get(
    "http://localhost:3001/api",
  );

  await new Promise((r) => setTimeout(r, 5000));
  const title1 = response.data.title;

  return (
    <div>
      <h1>{`The title is : ${title1}`}</h1>
    </div>
  );
}

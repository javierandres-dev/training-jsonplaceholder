// make a query to the API
export default async function queryApi(resource) {
  try {
    const url = `https://jsonplaceholder.typicode.com/${resource}`,
      resp = await fetch(url);
    if (!resp.ok) throw "error";
    return await resp.json();
  } catch (error) {
    console.error(error);
  }
}

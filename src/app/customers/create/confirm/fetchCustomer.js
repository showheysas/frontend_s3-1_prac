export default async function fetchCustomer(id) {
  const apiEndpoint = process.env.NEXT_PUBLIC_API_POINT;
  const res = await fetch(`${apiEndpoint}/customers?customer_id=${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch customer");
  }
  return res.json();
}

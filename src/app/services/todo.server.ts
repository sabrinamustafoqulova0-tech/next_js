export async function getProducts() {
  const res = await fetch(
    "https://6994554ffade7a9ec0f50ffa.mockapi.io/TablePtoject2",
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Ошибка")
  }

  const data = await res.json()
  console.log(data,"kk");
  
  return data
}
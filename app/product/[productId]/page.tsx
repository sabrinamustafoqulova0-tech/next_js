import Link from "next/link";

const Page = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  let data = [
    { id: 1, name: "Sabrina", age: "17" },
    { id: 2, name: "Sabrina", age: "17" },
    { id: 3, name: "Sabrina", age: "17" },
    { id: 4, name: "Sabrina", age: "17" },
  ];

  return (
    <div className="flex justify-center gap-20">
      {data.map((e) => (
        <Link key={e.id} href={`/product/${e.id}`}>
          <div className="cursor-pointer">
            <p>{e.name}</p>
            <p>{e.age}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;

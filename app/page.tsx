import "./globals.css";

export default function Navbar() {
  const data = [
    { 
      id: "1", 
      name: "Костюм Габриель",
      img:"https://optim.tildacdn.com/stor6366-6662-4135-a637-343339316462/-/format/webp/f3c1b7e4d8f11696ce8bf57f9da27a2a.jpg.webp",
      price:1200
     },
    { 
      id: "2", 
      name: "Берет Париж",
      img:"https://optim.tildacdn.com/tild3832-3636-4438-a237-323630653362/-/format/webp/IMG_4475.jpg.webp",
      price:120
     },
    { 
      id: "4", 
      name: "Шарф",
      img:"https://optim.tildacdn.com/tild6237-3565-4466-b538-376361663362/-/format/webp/IMG_7827.JPG.webp",
      price:1200
     },
    { 
      id: "5", 
      name: "Сумка",
      img:"https://optim.tildacdn.com/stor3363-6431-4534-b866-343464373736/-/format/webp/96249280.jpg.webp",
      price:1200
     },
    { 
      id: "6", 
      name: "Костюм Габриель",
      img:"https://optim.tildacdn.com/tild3437-3563-4033-a631-356135383036/-/format/webp/photo_2021-07-16_133.jpeg.webp",
      price:1200
     },
    { 
      id: "7", 
      name: "Костюм Габриель",
      img:"https://optim.tildacdn.com/tild3236-6366-4530-a334-323633363464/-/format/webp/IMG_8633.jpg.webp",
      price:1200
     },
    { 
      id: "8", 
      name: "Костюм Габриель",
      img:"https://optim.tildacdn.com/stor6164-6566-4662-b265-396532623231/-/format/webp/35138501.jpg.webp",
      price:1200
     },
    { 
      id: "9", 
      name: "Сумка Round",
      img:"https://optim.tildacdn.com/stor3265-6466-4561-b362-393765393065/-/format/webp/23267069.jpg.webp",
      price:1200
     },
    ];

  return (
    <nav className="bg-[#f9f7f4] min-h-screen py-16">
      <div className="flex px-[180px] flex-wrap justify-center gap-12">
        {data.map((e)=> {
          return(
            <div 
              key={e.id} 
              className="group w-[280px] bg-white rounded-3xl overflow-hidden 
              shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="overflow-hidden">
                <img 
                  className="w-full h-[320px] object-cover 
                  group-hover:scale-110 transition duration-700" 
                  src={e.img} 
                  alt="" 
                />
              </div>

              <div className="p-5">
                <h1 className="text-[17px] font-medium text-gray-800 tracking-wide">
                  {e.name}
                </h1>

                <h1 className="text-[15px] text-gray-500 mt-1 group-hover:text-black transition">
                  ${e.price}
                </h1>

                <div className="mt-3 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          )
        })}
      </div>
    </nav>
  );

}
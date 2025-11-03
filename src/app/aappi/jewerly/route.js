export async function GET() {
    const data = [
      {
        id: 1,
        name: "Kalung Layer",
        price: 90000,
        image: "/Kalung Layer.jpg",
      },
      {
        id: 2,
        name: "Gelang Kulit",
        price: 130000,
        image: "/Gelang Kulit.jpg",
      },
      {
        id: 3,
        name: "Cincin Silver",
        price: 130000,
        image: "/Cincin Silver.webp",
      },
      {
        id: 4,
        name: "Anting Fashion",
        price: 100000,
        image: "/Anting Fashion.jpg",
      },
      
   
    ];
  
    return Response.json(data);
  }
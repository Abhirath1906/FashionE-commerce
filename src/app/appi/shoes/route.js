export async function GET() {
    const data = [
      {
        id: 1,
        name: "Wedges",
        price: 110000,
        image: "/Wedges.png",
      },
      {
        id: 2,
        name: "Sneakers Canvas",
        price: 90000,
        image: "/Sneakers Canvas.jpg",
      },
      {
        id: 3,
        name: "Slip On Wanita",
        price: 130000,
        image: "/Slip On Wanita.jpg",
      },
      {
        id: 4,
        name: "Slip On Casual",
        price: 120000,
        image: "/Slip On Casual.webp",
      },
      {
        id: 4,
        name: "Sepatu Running",
        price: 130000,
        image: "/Sepatu Running.jpg",
      },
      {
        id: 5,
        name: "Sepatu Platform",
        price: 120000,
        image: "/Sepatu Platform.webp",
      },
      {
        id: 6,
        name: "Sepatu Formal",
        price: 110000,
        image: "/Sepatu Formal.webp",
      },
      {
        id: 7,
        name: "Loafers Pria",
        price: 110000,
        image: "/Loafers Pria.webp",
      },
      {
        id: 8,
        name: "High Heels",
        price: 90000,
        image: "/High Heels.webp",
      },
      {
        id: 9,
        name: "Boots Kulit",
        price: 90000,
        image: "/Boots Kulit.jpg",
      },
      {
        id: 10,
        name: "Espadrilles",
        price: 120000,
        image: "/Espadrilles.jpg",
      },
    ];
  
    return Response.json(data);
  }
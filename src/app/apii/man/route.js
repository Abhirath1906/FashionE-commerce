export async function GET() {
    const data2 = [
      {
        id: 1,
        name: "Windbreaker",
        price: 120000,
        image: "/Windbreaker.jpg",
      },
      {
        id: 2,
        name: "Tank Top",
        price: 90000,
        image: "/Tank Top.png",
      },
      {
        id: 3,
        name: "T-shirt Oversize",
        price: 130000,
        image: "/T-shirt Oversize.jpg",
      },
      {
        id: 4,
        name: "T-shirt Graphic",
        price: 120000,
        image: "/T-shirt Graphic.jpg",
      },
      {
        id: 5,
        name: "Sweater Rajut",
        price: 110000,
        image: "/Sweater Rajut.jpg",
      },
      {
        id: 6,
        name: "Sweater Hoodie",
        price: 100000,
        image: "/Sweater Hoodie.webp",
      },
      {
        id: 7,
        name: "Long T-Shirt",
        price: 120000,
        image: "/Long T-Shirt.webp",
      },
      {
        id: 8,
        name: "Legging Polos",
        price: 90000,
        image: "/Legging Polos.jpg",
      },
      {
        id: 9,
        name: "Legging Sport",
        price: 100000,
        image: "/Legging Sport.jpg",
      },
      {
        id: 9,
        name: "Kemeja Flanel",
        price: 120000,
        image: "/Kemeja Flanel.webp",
      },
      {
        id: 10,
        name: "Kaos Polos",
        price: 110000,
        image: "/Kaos Polos.jpg",
      },
      {
        id: 11,
        name: "Jaket Varsity",
        price: 100000,
        image: "/Jaket Varsity.jpg",
      },
      {
        id: 11,
        name: "Jaket Parasut",
        price: 90000,
        image: "/Jaket Parasut.webp",
      },
      {
        id: 12,
        name: "Jaket Kulit",
        price: 130000,
        image: "/Jaket Kulit.jpg",
      },
      {
        id: 13,
        name: "Jaket Denim",
        price: 120000,
        image: "/Jaket Denim.jpg",
      },
      {
        id: 14,
        name: "Celana Training",
        price: 120000,
        image: "/Celana Training.webp",
      },
      {
        id: 15,
        name: "Celana Jogger Cargo",
        price: 90000,
        image: "/Celana Jogger Cargo.webp",
      },
      {
        id: 16,
        name: "Celana Jeans",
        price: 130000,
        image: "/Celana Jeans.webp",
      },
      {
        id: 17,
        name: "Celana Formal",
        price: 120000,
        image: "/Celana Formal.webp",
      },
      {
        id: 18,
        name: "Celana Chino",
        price: 110000,
        image: "/Celana Chino.webp",
      },
      {
        id: 19,
        name: "Bomber Jacket",
        price: 130000,
        image: "/Bomber Jacket.jpg",
      },
      {
        id: 20,
        name: "Blazer Slim Fit",
        price: 110000,
        image: "/Blazer Slim Fit.jpg",
      },
      {
        id: 21,
        name: "Vest Rajut",
        price: 100000,
        image: "/Vest Rajut.jpg",
      },
      {
        id: 22,
        name: "Kaos Polo",
        price: 100000,
        image: "/Kaos Polo.jpg",
      },
    ];
  
    return Response.json(data2);
  }
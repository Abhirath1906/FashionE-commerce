export async function GET() {
    const data = [
      {
        id: 1,
        name: "Tunik Motif",
        price: 130000,
        image: "/Tunik Motif.jpg",
      },
      {
        id: 2,
        name: "Tunik Muslim",
        price: 90000,
        image: "/Tunik Muslim.jpg",
      },
      {
        id: 3,
        name: "Skirt A-Line",
        price: 110000,
        image: "/Skirt A-Line.jpg",
      },
      {
        id: 4,
        name: "Rok Plisket",
        price: 110000,
        image: "/Rok Plisket.jpg",
      },
      {
        id: 5,
        name: "Culottes",
        price: 100000,
        image: "/Culottes.jpg",
      },
      {
        id: 6,
        name: "Crop Tee",
        price: 90000,
        image: "/Crop Tee.jpg",
      },
      {
        id: 7,
        name: "Blouse Lengan Puff",
        price: 120000,
        image: "/Blouse Lengan Puff.jpg",
      },
      {
        id: 8,
        name: "Trench Coat",
        price: 120000,
        image: "/Trench Coat.jpg",
      },
      {
        id: 9,
        name: "Shorts Denim",
        price: 100000,
        image: "/Shorts Denim.jpg",
      },
      {
        id: 10,
        name: "Parka Hoodie",
        price: 100000,
        image: "/Parka Hoodie.jpg",
      },
      {
        id: 11,
        name: "Outer Kimono",
        price: 90000,
        image: "/Outer Kimono.jpg",
      },
      {
        id: 12,
        name: "Celana Kulot",
        price: 100000,
        image: "/Celana Kulot.jpg",
      },
      {
        id: 13,
        name: "Celana Palazzo",
        price: 110000,
        image: "/Celana Palazzo.jpg",
      },
    ];
  
    return Response.json(data);
  }
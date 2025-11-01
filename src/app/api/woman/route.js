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
    ];
  
    return Response.json(data);
  }
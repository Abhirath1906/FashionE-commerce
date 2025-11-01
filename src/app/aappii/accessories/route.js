export async function GET() {
    const data5 = [
      
      {
        id: 1,
        name: "Gelang Kulit",
        price: 130000,
        image: "/Gelang Kulit.jpg",
      },
      {
        id: 2,
        name: "Scarf Polos",
        price: 100000,
        image: "/Scarf Polos.jpg",
      },
      {
        id: 3,
        name: "Kipas Tangan",
        price: 130000,
        image: "/Kipas Tangan.jpg",
      },
      {
        id: 4,
        name: "Kacamata Fashion",
        price: 130000,
        image: "/Kacamata Fashion.jpg",
      },
      
      {
        id: 5,
        name: "Jam Tangan Casual",
        price: 110000,
        image: "/Jam Tangan Casual.png",
      },
      {
        id: 6,
        name: "Ikat Pinggang Kulit",
        price: 110000,
        image: "/Ikat Pinggang Kulit.jpg",
      },
      {
        id: 7,
        name: "Hijab Voal",
        price: 100000,
        image: "/Hijab Voal.png",
      },
      
      {
        id: 8,
        name: "Dompet Kulit",
        price: 110000,
        image: "Dompet Kulit.jpg",
      },
      {
        id: 9,
        name: "Topi Bucket",
        price: 110000,
        image: "Topi Bucket.jpg",
      },
      {
        id: 10,
        name: "Tas Mini Backpack",
        price: 100000,
        image: "Tas Mini Backpack.jpg",
      },
      
   
    ];
  
    return Response.json(data5);
  }
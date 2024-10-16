// shop.tsx

// Define the Shop type if needed here, or import it from a shared types file
export type Shop = {
    name: string;
    photo: string;
    description: string;
    location: string;
    mobile: string;
  };
  
  // Export predefined shop data with all categories
  export const shops: Record<string, Shop[]> = {
    "Flower Shop": [
    {
      name: "Dry bloom",
      photo: "/images/dry_bloom.jpg",
      description: "Deals in Dry Flowers",
      location: "Sangaiporou",
      mobile: "8669177207",
    },
    {
      name: "Nachom",
      photo: "/images/nachom.jpg",
      description: "Deals in Fresh Flowers, Gifting, Decorations",
      location: "Yaiskul",
      mobile: "6009072659",
    },
    {
      name: "Wang Khutsem",
      photo: "/images/wang.jpg",
      description: "Deals in Fresh Flowers, Gifting",
      location: "Singjamei",
      mobile: "9366030014",
    },
  ],
  "Cafe & Restaurant": [
    {
      name: "175C",
      photo: "/images/175.jpg",
      description: "Cafe and Restaurant",
      location: "Sangaiporou, near Iskon",
      mobile: "9362840990",
    },
    {
      name: "Green Wood",
      photo: "/images/green.jpg",
      description: "Cafe and Restaurant",
      location: "Love Road, Tiddim Line",
      mobile: "8259999703",
    },
    {
      name: "Pizza Pop",
      photo: "/images/pizza.jpg",
      description: "Cafe",
      location: "Kairang",
      mobile: "8257926197",
    },
  ],
  "Women's Clothing & Accessories": [
    {
      name: "499 collection",
      photo: "/images/499.jpg",
      description: "Deals in Women's Clothing",
      location: "Chingmeirong",
      mobile: "8575714312",
    },
    {
      name: "BB collection",
      photo: "/images/BB.jpg",
      description: "Deals in Women's Clothing",
      location: "Changangei",
      mobile: "8794777087",
    },
    {
      name: "Bunnies Beads",
      photo: "/images/bunny.jpg",
      description: "Deals in Women's Accessories",
      location: "Singjamei and Sagolband",
      mobile: "6009567092",
    },
    {
      name: "Cheeryboutique",
      photo: "/images/cher.jpg",
      description: "Deals in Women's Clothing",
      location: "Sangaiporou",
      mobile: "9366159561",
    },
    {
      name: "Cherry creation sagolband",
      photo: "/images/cherry.jpg",
      description: "Deals in Women's Accessories",
      location: "Sagolband",
      mobile: "9612105446",
    },
    {
      name: "DN accessories",
      photo: "/images/DN.jpg",
      description: "Deals in Women's Accessories",
      location: "Sagolband FCI Rd",
      mobile: "9233684484",
    },
    {
      name: "Keithel Macha",
      photo: "/images/keithel.jpg",
      description: "Deals in Women's Accessories",
      location: "Wangkhei",
      mobile: "9354220144",
    },
    {
      name: "Nupigi Leiteng",
      photo: "/images/nupi.jpg",
      description: "Deals in Women's Clothing",
      location: "Uripok",
      mobile: "8119879180",
    },
  ],
  "Bakery Shop": [
    {
      name: "Baked by khel",
      photo: "/images/khel.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Khurai and Keisampat",
      mobile: "8132857099",
    },
    {
      name: "Cake Delight",
      photo: "/images/delight.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Changangei, Imphal",
      mobile: "9612705391",
    },
    {
      name: "Cake express",
      photo: "/images/express.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Nagamapal, Imphal",
      mobile: "7005722748",
    },
    {
      name: "Creams",
      photo: "/images/creams.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Naoremthong, Imphal",
      mobile: "7002343763",
    },
    {
      name: "DCake Bakery",
      photo: "/images/dcake.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Kwakeithel, Imphal",
      mobile: "8135036662",
    },
    {
      name: "Joie treats",
      photo: "/images/joie.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Lamphel, Imphal",
      mobile: "8794358712",
    },
    {
      name: "Nganthoi Bakes",
      photo: "/images/nganthoi.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Thangmeiband, Imphal",
      mobile: "8798132650",
    },
    {
      name: "Ni desert",
      photo: "/images/ni.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Kwakeithel, Imphal",
      mobile: "9612202831",
    },
    {
      name: "Nungshi Khudol",
      photo: "/images/nungshi.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Singjamei, Imphal",
      mobile: "7005549958",
    },
    {
      name: "Pettie Bakes",
      photo: "/images/pettie.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Wangkhei, Imphal",
      mobile: "8949960668",
    },
    {
      name: "Queen Bakes",
      photo: "/images/queen.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Keishamthong Thangjam leirak ",
      mobile: "7005492671",
    },
    {
      name: "Cake Paradise",
      photo: "/images/paradise.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Singjamei, Imphal",
      mobile: "8794778707",
    },
    {
      name: "Slice of Paradise",
      photo: "/images/slice.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Nagamapal, Imphal",
      mobile: "8729944647",
    },
    {
      name: "Tao Bakery",
      photo: "/images/tao.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Khurai Lamlong, Imphal",
      mobile: "9774040483",
    },
    {
      name: "Tummy Cake",
      photo: "/images/tummy.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Sagolband, Imphal",
      mobile: "8302563676",
    },
    {
      name: "Snow Bakes",
      photo: "/images/snow.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Uripok, Imphal",
      mobile: "8575812905",
    },
    {
      name: "Nachom Bakery",
      photo: "/images/nachomB.jpg",
      description: "Freshly baked cakes, cookies, and pastries to satisfy your sweet tooth.",
      location: "Babupara, Imphal",
      mobile: "",
    },
  ],
  "Gift Shop": [
    {
      name: "BK crafts ",
      photo: "/images/bk.jpg",
      description: "Deals in Gifting Solutions",
      location: "Kongba, Imphal",
      mobile: "7005142847",
    },
    {
      name: "Fashion Fusion",
      photo: "/images/fashion.jpg",
      description: "Deals in Gifting Solutions",
      location: "Khewa Thong",
      mobile: "",
    },
    {
      name: "Hei Lei",
      photo: "/images/heilei.jpg",
      description: "Deals in Gifting Solutions",
      location: "Sagolband",
      mobile: "",
    },
    {
      name: "Laija Trends",
      photo: "/images/laija.jpg",
      description: "Deals in Gifting Solutions",
      location: "Singjamei Bazar",
      mobile: "",
    },
    {
      name: "Leikhok",
      photo: "/images/leikhok.jpg",
      description: "Deals in Gifting Solutions",
      location: "Keisamthong",
      mobile: "",
    },
    {
      name: "Leiteng Hoard",
      photo: "/images/leiteng1.jpg",
      description: "Deals in Gifting Solutions",
      location: "Khewa Thong",
      mobile: "",
    },
    {
      name: "Leiteng Lei",
      photo: "/images/leiteng2.jpg",
      description: "Deals in Gifting Solutions",
      location: "Moirangkhong",
      mobile: "",
    },
    {
      name: "Little Store",
      photo: "/images/little.jpg",
      description: "Deals in Gifting Solutions",
      location: "Kangla Mamang",
      mobile: "",
    },
    {
      name: "Noble Creation",
      photo: "/images/noble.jpg",
      description: "Deals in Gifting Solutions",
      location: "Khurai",
      mobile: "",
    },
    {
      name: "Riiree Store",
      photo: "/images/rii.jpg",
      description: "Deals in Gifting Solutions",
      location: "Babupara",
      mobile: "",
    },
    {
      name: "Sugoi",
      photo: "/images/sugoi.jpg",
      description: "Deals in Gifting Solutions",
      location: "Uripok",
      mobile: "",
    },
    {
      name: "Swift Hands",
      photo: "/images/swift.jpg",
      description: "Deals in Gifting Solutions",
      location: "Hatta",
      mobile: "",
    },
    {
      name: "Whimsy Florest",
      photo: "/images/whimsy.jpg",
      description: "Deals in Gifting Solutions",
      location: "Keisamthong",
      mobile: "",
    },
    {
      name: "Eleven Store",
      photo: "/images/11.jpg",
      description: "Deals in Gifting Solutions",
      location: "Thoubal Ningombam",
      mobile: "",
    },
    {
      name: "Liklam Accessories",
      photo: "/images/liklam.jpg",
      description: "Deals in Gifting Solutions",
      location: "Sagolband",
      mobile: "",
    },
    {
      name: "The Beads",
      photo: "/images/beads.jpg",
      description: "Deals in Gifting Solutions",
      location: "Khurai",
      mobile: "",
    },
  ],
  "Food Manufacturers": [
    {
      name: "Chumthang Meira",
      photo: "/images/chumthang.jpg",
      description: "Pickles and more",
      location: "Nongmeibung",
      mobile: "",
    },
    {
      name: "Kimchi Imphal",
      photo: "/images/kimchi.jpg",
      description: "Pickles and more",
      location: "Naoremthong",
      mobile: "",
    },
    {
      name: "Leichil",
      photo: "/images/leichil.jpg",
      description: "Pickles and more",
      location: "Keisamthong",
      mobile: "",
    },
    {
      name: "Luscious Soy",
      photo: "/images/LS.jpg",
      description: "Pickles and more",
      location: "Haobam Marak",
      mobile: "",
    },
    {
      name: "Moms",
      photo: "/images/moms.jpg",
      description: "Pickles and more",
      location: "Singjamei",
      mobile: "",
    },
    {
      name: "Smoked Pork",
      photo: "/images/smoked.jpg",
      description: "Pickles and more",
      location: "Keisamthong",
      mobile: "",
    },
  ],
  "Printing Shop": [
    {
      name: "Cubical",
      photo: "/images/cubical.jpg",
      description: "All Printing Requirements",
      location: "",
      mobile: "",
    },
    {
      name: "Ingelei Print",
      photo: "/images/ingelei.jpg",
      description: "All Printing Requirements",
      location: "Keisampat",
      mobile: "",
    },
    {
      name: "Lairen Sanahanbi",
      photo: "/images/lairen.jpg",
      description: "All Printing Requirements",
      location: "Keisampat",
      mobile: "",
    },
    {
      name: "Solitre",
      photo: "/images/soli.jpg",
      description: "All Printing Requirements",
      location: "Sanngaiporou",
      mobile: "",
    },
  ],
  "Traditional Clothing Products": [
    {
      name: "Digi Arts",
      photo: "/images/digi.jpg",
      description: "Traditional Handloom Products",
      location: "Sagolband",
      mobile: "",
    },
    {
      name: "Heepokpiyai Clothing",
      photo: "/images/heep.jpg",
      description: "Traditional Handloom Products",
      location: "Sanngaiporou",
      mobile: "",
    },
  ],
  "Nursery Plant": [
    {
      name: "Green Keep",
      photo: "/images/greenkeep.jpg",
      description: "A wide variety of plants and gardening tools for your home garden.",
      location: "Canchipur",
      mobile: "",
    },
  ],
  "Men's Clothing and Accessories": [
    {
      name: "Imma Watch",
      photo: "/images/ima.jpg",
      description: "Men's Clothing and Accessories",
      location: "Nongmeibung and Checkon",
      mobile: "",
    },
    {
      name: "Imoinu Fashion store",
      photo: "/images/.imoinujpg",
      description: "Men's Clothing and Accessories",
      location: "Palace Compound",
      mobile: "",
    },
    {
      name: "Jerry Watch",
      photo: "/images/jerry.jpg",
      description: "Men's Clothing and Accessories",
      location: "Nongmeibung",
      mobile: "",
    },
    {
      name: "Kanglei OS",
      photo: "/images/kanglei.jpg",
      description: "Men's Clothing and Accessories",
      location: "Kakching",
      mobile: "",
    },
    {
      name: "Kurak",
      photo: "/images/kurak.jpg",
      description: "Men's Clothing and Accessories",
      location: "Yaiskul",
      mobile: "",
    },
    {
      name: "MayoutFit",
      photo: "/images/may.jpg",
      description: "Men's Clothing and Accessories",
      location: "Thangmeiband",
      mobile: "",
    },
    {
      name: "PB Online Store",
      photo: "/images/pb.jpg",
      description: "Men's Clothing and Accessories",
      location: "Kakwa",
      mobile: "",
    },
    {
      name: "VK Store",
      photo: "/images/ck.jpg",
      description: "Men's Clothing and Accessories",
      location: "Canchipur",
      mobile: "",
    },
    {
      name: "Lily Leiteng",
      photo: "/images/lily.jpg",
      description: "Men's Clothing and Accessories",
      location: "Sagolband",
      mobile: "",
    },
  ],
  "Thrift Store": [
    {
      name: "Japcic",
      photo: "/images/jap.jpg",
      description: "Affordable second-hand clothing and accessories in great condition.",
      location: "Khurai",
      mobile: "",
    },
    {
      name: "Lane no.9",
      photo: "/images/lane9.jpg",
      description: "Affordable second-hand clothing and accessories in great condition.",
      location: "Bamon Leikai",
      mobile: "",
    },
    {
      name: "Thrift and More",
      photo: "/images/tnm.jpg",
      description: "Affordable second-hand clothing and accessories in great condition.",
      location: "Keisampat",
      mobile: "",
    },
  ],
  "Gym Supplements": [
    {
      name: "KR Nutrition",
      photo: "/images/kr.jpg",
      description: "High-quality gym supplements for athletes and fitness enthusiasts.",
      location: "Sagolband, Imphal",
      mobile: "",
    },
    {
      name: "Total Health Nutrition",
      photo: "/images/total.jpg",
      description: "High-quality gym supplements for athletes and fitness enthusiasts.",
      location: "Moirangkhong, Imphal",
      mobile: "",
    },
  ],
  "Phone Accessories": [
    {
      name: "scorpion666",
      photo: "/images/scorpio.jpg",
      description: "All your phone accessory needs from cases to chargers and more.",
      location: "Sagolband, Imphal",
      mobile: "",
    },
  ],
  "Hospital": [
    {
      name: "Shija Hospital",
      photo: "/images/shija.jpg",
      description: "A full-service hospital providing advanced medical care.",
      location: "Langol, Imphal",
      mobile: "",
    },
  ],
  "Handmade Products": [
    {
      name: "Whimsy crocet",
      photo: "/images/whims.jpg",
      description: "Beautiful handmade products crafted by local artisans.",
      location: "Yaiskul, Imphal",
      mobile: "",
    },
  ],
  "Luxury Curtains": [
    {
      name: "Sonia Curtains",
      photo: "/images/sonia.jpg",
      description: "High-end curtains to give your home a touch of luxury.",
      location: "Sinngjamei Imphal",
      mobile: "",
    },
  ],
  "Bakery Item shop": [
    {
      name: "Ibakers",
      photo: "/images/ibaker.jpg",
      description: "Bakery essentail items",
      location: "Thongju, Imphal",
      mobile: "",
    },
    {
      name: "Bakers Haven",
      photo: "/images/haven.jpg",
      description: "Bakery essentail items",
      location: "Chingmeirong, Imphal",
      mobile: "",
    },
  ],
  "Milk Products": [
    {
      name: "Panner Shop",
      photo: "/images/lukhoi.jpg",
      description: "Milk Products",
      location: "Thangal Bazar, Imphal",
      mobile: "",
    },
  ],
  // Add more categories as needed
};

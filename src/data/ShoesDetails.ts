import { ShoeDetailsType } from '../interfaces/Props';

const ShoesDetails: Array<ShoeDetailsType> = [
    {
        id: 1,
        name: "Nike Blazer Mid '77 Vintage",        
        price: 140,
        sizes: [6,7,8,9,10,11,12],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/1/1_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/1/1_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/1/1_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/1/1_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/1/1_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/1/1_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/1/1_07.jpg'
        ],
        rating: 4.2,
        desc: "The Nike Blazer Mid '77 Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years.",
        reviewsCount: 14                               
    },
    {
        id: 2,
        name: "NikeCourt Vintage Premium",        
        price: 105,
        sizes: [4,5,6,7,8,9,10],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/2/2_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/2/2_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/2/2_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/2/2_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/2/2_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/2/2_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/2/2_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/2/2_08.jpg'
        ],
        rating: 4,
        desc: "The NikeCourt Vintage Premium embodies '80s tennis at its best: laid-back and stylish. The smooth leather on the upper and suede touches collaborate for an authentic look and feel, while the cushioned insole provides comfort with every step.",
        reviewsCount: 10    
    },
    {
        id: 3,
        name: "Nike Air Zoom SuperRep",        
        price: 170,
        sizes: [7,8,9,10],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/3/3_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/3/3_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/3/3_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/3/3_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/3/3_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/3/3_06.jpg'            
        ],
        rating: 4,
        desc: "The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines with a wide, supportive heel to keep you moving and lifting comfortably.",
        reviewsCount: 49
    },
    {
        id: 4,
        name: "Nike Air Max 90",        
        price: 170,
        sizes: [6,6.5,7, 7.5,8,9,10],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/4/4_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/4/4_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/4/4_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/4/4_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/4/4_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/4/4_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/4/4_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/4/4_08.jpg'
        ],
        rating: 5,
        desc: "The Nike Air Max 90 stays true to its OG running roots with an iconic Waffle outsole, stitched overlays and classic colour-accented TPU plates. The Laser Blue tone celebrates the original and is paired perfectly with the striking greyscale upper, while Max Air cushioning adds comfort to your journey.",
        reviewsCount: 1    
    },
    {
        id: 5,
        name: "Nike Wildhorse 6",        
        price: 170,
        sizes: [6.5,7,7.5,8,9,10,11,12],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/5/5_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/5/5_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/5/5_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/5/5_04.jpg'            
        ],
        rating: 4.3,
        desc: "The Nike Wildhorse 6 keeps it stable, secure and lightweight on the trail. An updated outsole delivers the traction you need, while a foam midsole keeps you cushioned on your run.",
        reviewsCount: 23    
    },
    {
        id: 6,
        name: "Nike Pegasus Trail 2",        
        price: 190,
        sizes: [7,8,9,10,11],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/6/6_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/6/6_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/6/6_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/6/6_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/6/6_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/6/6_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/6/6_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/6/6_08.jpg'
        ],
        rating: 4.3,
        desc: "Find your wings on the path less travelled. The Nike Pegasus Trail 2 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction.",
        reviewsCount: 14    
    },
    {
        id: 7,
        name: "Jordan Air Cadence",        
        price: 160,
        sizes: [7,8,9,10,11,12,13],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/7/7_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/7/7_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/7/7_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/7/7_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/7/7_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/7/7_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/7/7_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/7/7_08.jpg'
        ],
        rating: 3.9,
        desc: "The Jordan Air Cadence blends modern craftsmanship with overt brand heritage. Easy to get on and wear all day, it features a sporty, streamlined design that's light, breathable and supportive.",
        reviewsCount: 2    
    },
    {
        id: 8,
        name: "Jordan 'Why Not?' Zer0.3 SE",        
        price: 190,
        sizes: [5,7,8,9,10,11],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/8/8_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/8/8_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/8/8_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/8/8_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/8/8_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/8/8_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/8/8_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/8/8_08.jpg'
        ],
        rating: 4.7,
        desc: "Russ wanted a shoe that felt light, locked him in, and looked crazy fast. The Jordan 'Why Not?' Zer0.3 SE is lighter and lower than the Zer0.3, with a plush collar to provide comfortable support around the ankle. It's loaded with responsive forefoot cushioning to help Russ transform his fearlessness into force.",
        reviewsCount: 3    
    },
    {
        id: 9,
        name: "Nike Air Max 90",        
        price: 200,
        sizes: [4,5,6,7,12],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/9/9_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/9/9_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/9/9_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/9/9_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/9/9_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/9/9_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/9/9_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/9/9_08.jpg',
        ],
        rating: 4.1,
        desc: "The Nike Air Max 90 transcends time with its OG roots and details that have landed them in the sneakerhead hall of fame. Take flight in Max Air cushioning that delivers lightweight comfort and traffic-stopping style.",
        reviewsCount: 25    
    },
    {
        id: 10,
        name: "NikeCourt Air Zoom GP Turbo",        
        price: 200,
        sizes: [6,8,10,11,12],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/10/10_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/10/10_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/10/10_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/10/10_04.jpg'            
        ],
        rating: 4.9,
        desc: "Tennis matches are fast, fierce and long. The NikeCourt Air Zoom GP Turbo combines an incredibly responsive, full-length Zoom Air unit with zones of durability so you can stay fresh for longer.",
        reviewsCount: 2    
    },
    {
        id: 11,
        name: "Jordan Max Aura 2",        
        price: 170,
        sizes: [7,8,9,10,11,12],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/11/11_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/11/11_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/11/11_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/11/11_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/11/11_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/11/11_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/11/11_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/11/11_08.jpg',
        ],
        rating: 3.8,
        desc: "The Jordan Max Aura 2 is inspired by the brand's rich legacy of performance basketball shoes. The design takes cues from past Air Jordans with lightweight cushioning and a look that's money on the street.",
        reviewsCount: 10    
    },
    {
        id: 12,
        name: "Nike SB Nyjah Free 2",        
        price: 140,
        sizes: [8,9,10,11,12,13],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/12/12_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/12/12_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/12/12_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/12/12_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/12/12_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/12/12_06.jpg'            
        ],
        rating: 4.2,
        desc: "The Nike SB Nyjah Free 2 is a sequel worthy of its predecessor. Inspired by the iconic Nike Air Zoom Spiridon, the original rubber design has been updated with mesh panels to help your feet stay cool through your hottest skate sessions.",
        reviewsCount: 14    
    },
    {
        id: 13,
        name: "Nike React Infinity Run Flyknit",        
        price: 230,
        sizes: [7,8,9,10,11,12,13],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/13/13_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/13/13_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/13/13_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/13/13_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/13/13_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/13/13_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/13/13_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/13/13_08.jpg'
        ],
        rating: 4.2,
        desc: "The Nike React Infinity Run Flyknit is designed to keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
        reviewsCount: 131    
    },
    {
        id: 14,
        name: "Nike Air Max 270",        
        price: 220,
        sizes: [6,7,8,9],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/14/14_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/14/14_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/14/14_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/14/14_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/14/14_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/14/14_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/14/14_07.jpg',
        ],
        rating: 4,
        desc: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
        reviewsCount: 92    
    },
    {
        id: 15,
        name: "Jordan Delta",        
        price: 190,
        sizes: [7.5,8,8.5,9,10,11],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/15/15_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/15/15_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/15/15_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/15/15_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/15/15_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/15/15_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/15/15_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/15/15_08.jpg',
        ],
        rating: 5,
        desc: "The Jordan Delta has a design that's expressive and comfortable from the inside out. Made from a mix of materials, this shoe has plush, lightweight foam underfoot. It's meticulously crafted for a look and feel only Jordan Brand can deliver.",
        reviewsCount: 15    
    },
    {
        id: 16,
        name: "Nike React Vision",        
        price: 190,
        sizes: [6,7,8,9,10,11],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/16/16_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/16/16_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/16/16_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/16/16_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/16/16_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/16/16_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/16/16_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/16/16_08.jpg'
        ],
        rating: 4.4,
        desc: "The Nike React Vision Worldwide delivers unparalleled comfort through Nike React technology and an ultra-plush tongue. The range of textures and exaggerated proportions add to the unique, surreal aesthetic.",
        reviewsCount: 5    
    },
    {
        id: 17,
        name: "Nike Air Zoom Vomero 14",        
        price: 220,
        sizes: [8,9,10,11,12,13],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/17/17_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/17/17_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/17/17_03.jpg'            
        ],
        rating: 4.1,
        desc: "The Nike Air Zoom Vomero 14 takes responsive cushioning to the next level. A full-length cushioning unit works with Nike React technology to deliver a super-snappy, smooth ride. Up top, the sleek design feels durable and supports your stride through every mile.",
        reviewsCount: 46    
    },
    {
        id: 18,
        name: "Nike Air Force 1 '07 Craft",        
        price: 190,
        sizes: [6,6.5,7,7.5,8],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/18/18_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/18/18_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/18/18_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/18/18_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/18/18_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/18/18_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/18/18_07.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/18/18_08.jpg'
        ],
        rating: 5,
        desc: "The legend lives on in the Nike Air Force 1 '07 Craft—a modern take on the iconic AF-1 with new details like fresh graphics on the tongue and heel. Crisp leather, brushed suede and exposed stitching on the upper add texture and depth while the new plush liner feels soft and comfortable. Its redesigned shape returns to OG roots, adding heritage style.",
        reviewsCount: 2    
    },
    {
        id: 19,
        name: "Nike Zoom Fly 3",        
        price: 230,
        sizes: [7,8,9,10],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/19/19_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/19/19_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/19/19_03.jpg'
        ],            
        rating: 4,
        desc: "Inspired by the Vaporfly, the Nike Zoom Fly 3 gives distance runners race-day comfort and durability. The power of a carbon-fibre plate keeps you in the running mile after mile.",
        reviewsCount: 67    
    },
    {
        id: 20,
        name: "Jordan Max 200",        
        price: 180,
        sizes: [8,9,10,11,12,13],
        images: [
            process.env.PUBLIC_URL + '/shoes_images_by_type/20/20_01.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/20/20_02.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/20/20_03.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/20/20_04.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/20/20_05.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/20/20_06.jpg',
            process.env.PUBLIC_URL + '/shoes_images_by_type/20/20_07.jpg',
        ],
        rating: 4.5,
        desc: "With design elements inspired by the Air Jordan 4, the Jordan Max 200 brings a new level of Air to Jordan, for details anchored in legacy and comfort made for the future.",
        reviewsCount: 16    
    }
];

export default ShoesDetails;
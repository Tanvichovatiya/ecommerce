


import watch from './image2/1watch.jpeg'
import boot  from './image2/boot.jpeg'
import boot1  from './image2/boot1.jpeg'
import boot2  from './image2/boot2.jpeg'
import boot3  from './image2/boot3.jpeg'
import cap from './image2/cap.jpeg'
import cap1 from './image2/cap1.jpeg'
import cap2 from './image2/cap2.jpeg'
import cap3 from './image2/cap3.jpeg'
import cropshirt from './image2/cropshirt.jpeg'
import cropshirt1 from './image2/cropshirt-1.jpeg'
import cropshirt2 from './image2/cropshirt-2.jpeg'
import cropshirt3 from './image2/cropshirt-3.jpeg'
import pant from './image2/pant.jpeg'
import pant1 from './image2/pant1.jpeg'
import pant2 from './image2/pant2.jpeg'
import pant3 from './image2/pant3.jpeg'
import sandle from './image2/sandle.jpeg'
import sandle1 from './image2/sandle1.jpeg'
import sandle2 from './image2/sandle2.jpeg'
import sandle3 from './image2/sandle3.jpeg'
import shirt from './image2/shirt.jpeg'
import shirt1 from './image2/shirt1.jpeg'
import shirt2 from './image2/shirt2.jpeg'
import shirt3 from './image2/shirt3.jpeg'

import shoes from './image2/shoes.jpeg'
import shoes1 from './image2/shoes1.jpeg'
import shoes2 from './image2/shoes2.jpeg'
import shoes3 from './image2/shoes3.jpeg'
import top1 from './image2/top1.jpeg'
import top2 from './image2/top2.jpeg'
import top3 from './image2/top3.jpeg'
import top from './image2/top.jpeg'
import topfency from './image2/topfency.jpeg'
import topfency1 from './image2/topfency1.jpeg'
import topfency2 from './image2/topfency2.jpeg'
import topfency3 from './image2/topfency3.jpeg'
import watch1 from './image2/1-2watch.jpeg'
import watch2 from './image2/1-3watch.jpeg'
import watch3 from './image2/1-4watch.jpeg'





export const categories=[
    'Electronic',
    'Fashion',
    'Home & kitchen',
    'Beauty',
    'Sports',
    'Automotive',

];

const mockData=[
    {
        id:0,
        image:watch,
        name:"Watch",
        price:400,
        images:[
            watch,
            watch1,
            watch2,
            watch3,
        ]
       
    }, 
     {
        id:1,
        image:sandle,
        name:"Sandle",
        price:450,
        images:[
            sandle,
            sandle1,
            sandle2,
            sandle3
        ]
    },
    {
        id:2,
        image:boot,
        name:"Boot",
        price:300,
        images:[
            boot,
            boot1,
            boot2,
            boot3
        ]
    },
    {
        id:3,
        image:cap,
        name:"Cap",
        price:140,
        images:[
            cap,
            cap1,
            cap2,
            cap3
        ]
    },
    {
        id:4,
        image:cropshirt,
        name:"Cropshirt",
        price:400,
        images:[
            cropshirt,
            cropshirt1,
            cropshirt2,
            cropshirt3
        ]
    },
    {
        id:5,
        image:shirt,
        name:"Shirt",
        price:350,
        images:[
            shirt,
            shirt1,
            shirt2,
            shirt3
        ]
    },
    {
        id:6,
        image:shoes,
        name:"Shoes",
        price:400,
        images:[
            shoes,
            shoes1,
            shoes2,
            
        ]
    },
    {
        id:7,
        image:topfency,
        name:"topfency",
        price:360,
        images:[
            topfency,
            topfency1,
            topfency2,
            topfency3
        ]
    },
    {
        id:8,
        image:pant,
        name:"Pant",
        price:390,
        images:[
            pant,
            pant1,
            pant2,
            pant3
        ]
    },
    {
        id:9,
        image:top,
        name:"Top",
        price:400,
        images:[
            top,
            top1,
            top2,
            top3
        ]
    },
    
]
export default mockData;
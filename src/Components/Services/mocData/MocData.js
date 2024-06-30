import SportCar from '../../../assets/Services/serviceImg1-Dm8nxdJt.jpg';
import PhotoShoot from '../../../assets/Services/serviceImg2-LkBjqsZl.jpg';

import ServiceSportCar1 from '../../../assets/Services/service-item-img1-BcBiZjWi.jpg';
import ServiceSportCar2 from '../../../assets/Services/service-item2-Xron-uur.jpg';
import ServiceSportCar3 from '../../../assets/Services/service-item3-BUPsL4LT.jpg';

import PhotoThootCar1 from '../../../assets/Services/service-item-img1-BcBiZjWi.jpg'
import PhotoThootCar2 from '../../../assets/Services/service-item2-Xron-uur.jpg'

export const dataService = [
    {
        id: 1,
        avatar: SportCar,
        title: 'Sports Car Rental Dubai Style Tour in Dubai',
        paragraf: 'Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!',
        link: '/sport_car_rent'
    },
    {
        id: 2,
        avatar: PhotoShoot,
        title: 'Photoshoot with luxury car rental Dubai ',
        paragraf: 'Professional car photoshoot as an additional type of service at Auto Zoom Car Rental',
        link: '/photoshoot-with-luxury-car-in-dubai'
    },
];

export const sportCars = [
    {
        id: 1,
        avatar: ServiceSportCar1,
        serviceId: 1,
        type: 'BASIC',
        count: 1000,
        person: 'one persone',
        title: `Dune buggies in Dubai Book your ride on 
                the most exciting adventure activity to hit the 
                desert and later pamper your self to a traditional Arabian hospitality.`,
        packages: ['Premium Transfer to camp', 'Dune Buggy riding 1.5 hours', 'Cuadro 15 min', 'Falcone shoting', 'Camel', 'VIP room', 'Fruits, Drinks, BBQ']
    },
    {
        id: 2,
        avatar: ServiceSportCar2,
        serviceId: 1,
        type: 'STRONG',
        count: 2000,
        person: 'two persone',
        title: `1asasa2334343434Dune buggies in Dubai Book your ride on the most 
                exciting adventure activity to hit the desert and later pamper your 
                self to a traditional Arabian hospitality.`,
        packages: ['Premium Transfer to camp', 'Dune Buggy riding 1.5 hours', 'Cuadro 15 min', 'Falcone shoting', 'Camel', 'VIP room', 'Fruits, Drinks, BBQ']
    },
    {
        id: 3,
        avatar: ServiceSportCar3,
        serviceId: 1,
        type: 'PREMIUM',
        count: 3000,
        person: 'tree persone',
        title: `121212334343434Dune buggies in Dubai Book your ride on the 
                most exciting adventure activity to hit the desert and 
                later pamper your self to a traditional Arabian hospitality.`,
        packages: ['Premium Transfer to camp', 'Dune Buggy riding 1.5 hours', 'Cuadro 15 min', 'Falcone shoting', 'Camel', 'VIP room', 'Fruits, Drinks, BBQ']
    },
];

export const photoShoot = [
    {
        id: 1,
        avatar: PhotoThootCar1,
        serviceId: 2,
        type: 'BASIC',
        count: 2000,
        person: 'one persone',
        title: `Dune buggies in Dubai Book your ride on the most exciting adventure 
                activity to hit the desert and later pamper your self to a traditional Arabian hospitality.`,
        packages: ['Premium Transfer to camp', 'Dune Buggy riding 1.5 hours', 'Cuadro 15 min', 'Falcone shoting', 'Camel', 'VIP room', 'Fruits, Drinks, BBQ']
    },
    {
        id: 2,
        avatar: PhotoThootCar2,
        serviceId: 2,
        type: 'PREMIUM',
        count: 4000,
        person: 'two persone',
        title: `Adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.`,
        packages: ['Premium Transfer to camp', 'Dune Buggy riding 1.5 hours', 'Cuadro 15 min', 'Falcone shoting', 'Camel', 'VIP room', 'Fruits, Drinks, BBQ']
    },
];
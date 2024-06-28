import { dataService } from "../mocData/MocData";
import { sportCars } from "../mocData/MocData";
import { photoShoot } from "../mocData/MocData";

export default function countServices(){
    let name = '';
    let dates = null;
    let titleName = 'SERVICES';

    if(window.location.pathname === '/service/sport_car_rent'){
        name = `/ ${dataService[0].title}`;
        dates = sportCars;
        titleName = dataService[0].title;
    }
    if(window.location.pathname === '/service/photoshoot-with-luxury-car-in-dubai'){
        name = `/ ${dataService[1].title}`;
        dates = photoShoot;
        titleName = dataService[1].title;
    }
    if(window.location.pathname === '/service'){
        name = ``;
        dates = null;
        titleName = 'SERVICES';
    }

    return [name, dates, titleName];
}
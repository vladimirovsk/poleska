const October2021_1 = process.env.PUBLIC_URL + '/component/galeria/october/1.jpg'
const October2021_2 = process.env.PUBLIC_URL + '/component/galeria/october/2.jpg'
const October2021_3 = process.env.PUBLIC_URL + '/component/galeria/october/3.jpg'
const October2021_4 = process.env.PUBLIC_URL + '/component/galeria/october/4.jpg'
// import November image1 from './img/Realizaciya/Project3/image1.jpg';

const November2021_1 = process.env.PUBLIC_URL + '/component/galeria/november/1.jpg'
const November2021_2 = process.env.PUBLIC_URL + '/component/galeria/november/2.jpg'
const November2021_3 = process.env.PUBLIC_URL + '/component/galeria/november/3.jpg'


export const October2021 = [
    October2021_1, October2021_2, October2021_3,
    October2021_4
]

const November2021 = [
    November2021_1, November2021_2, November2021_3
]

export const GaleriaData = [
    {
        id: 1, //Код
        img: October2021_1, //Код картинки
        name: "Październik",
        images: October2021, //Массив картинок проекта
        title: 'NIWELACJA TERENU ORAZ PRZYGOTOWANIA DO WYKONANIA PALISADY', //Тител
    },
    {
        id: 2, //Код,
        name: "Listopad",
        img: November2021_1, //Код картинки
        images: November2021, //Массив картинок проекта
        title: 'REALIZACJA ZABEZPIECZENIA WYKOPU W FORMIE PALISADY', //Тител
    }
]

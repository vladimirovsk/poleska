const October2021_1 = process.env.PUBLIC_URL + '/component/galeria/october/1.jpg'
const October2021_2 = process.env.PUBLIC_URL + '/component/galeria/october/2.jpg'
const October2021_3 = process.env.PUBLIC_URL + '/component/galeria/october/3.jpg'
const October2021_4 = process.env.PUBLIC_URL + '/component/galeria/october/4.jpg'
// import November image1 from './img/Realizaciya/Project3/image1.jpg';

const November2021_1 = process.env.PUBLIC_URL + '/component/galeria/november/1.jpg'
const November2021_2 = process.env.PUBLIC_URL + '/component/galeria/november/2.jpg'
const November2021_3 = process.env.PUBLIC_URL + '/component/galeria/november/3.jpg'


export const October2021 = [
    {
        image: October2021_1,
        caption: 'WYKONANIE OGRODZENIA TERENU INWESTYCJI ORAZ ZAPLECZA SOCJALNO-SANITARNEGO.'
    },
    {
        image: October2021_2,
        caption: 'WYKONANIE OGRODZENIA TERENU INWESTYCJI ORAZ ZAPLECZA SOCJALNO-SANITARNEGO.'
    },
    {
        image: October2021_3,
        caption: 'NIWELACJA TERENU ORAZ PRZYGOTOWANIA DO WYKONANIA PALISADY'
    },
    {
        image: October2021_4,
        caption: 'NIWELACJA TERENU ORAZ PRZYGOTOWANIA DO WYKONANIA PALISADY'
    },


]

const November2021 = [
    {
        image: November2021_1,
        caption: 'REALIZACJA ZABEZPIECZENIA WYKOPU W FORMIE PALISADY'
    },

    {
        image: November2021_2,
        caption: 'REALIZACJA ZABEZPIECZENIA WYKOPU W FORMIE PALISADY'
    },
    {
        image: November2021_3,
        caption: 'REALIZACJA ZABEZPIECZENIA WYKOPU W FORMIE PALISADY'
    },]

export const GaleriaData = [
    {
        id: 1, //Код
        img: October2021_1, //Код картинки
        name: "Październik",
        images: October2021, //Массив картинок проекта
        title: 'Październik 2021', //Тител
    },
    {
        id: 2, //Код,
        name: "Listopad",
        img: November2021_1, //Код картинки
        images: November2021, //Массив картинок проекта
        title: 'Listopad 2021', //Тител
    }
]

const October2021_1 = process.env.PUBLIC_URL + '/component/galeria/october/1.jpg'
const October2021_2 = process.env.PUBLIC_URL + '/component/galeria/october/2.jpg'
const October2021_3 = process.env.PUBLIC_URL + '/component/galeria/october/3.jpg'
const October2021_4 = process.env.PUBLIC_URL + '/component/galeria/october/4.jpg'

const November2021_1 = process.env.PUBLIC_URL + '/component/galeria/november/1.jpg'
const November2021_2 = process.env.PUBLIC_URL + '/component/galeria/november/2.jpg'
const November2021_3 = process.env.PUBLIC_URL + '/component/galeria/november/3.jpg'

const January2022_1 = process.env.PUBLIC_URL + '/component/galeria/january/1.jpg'
const January2022_2 = process.env.PUBLIC_URL + '/component/galeria/january/2.jpg'

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

const January2022 = [
    {
        image: January2022_1,
        caption: 'Zakończyliśmy wykonywanie palisady betonowej, kontynuacja robót ziemnych, trwają prace nad montażem żurawia wieżowego do obsługi transportu pionowego budowy.'
    },

    {
        image: January2022_2,
        caption: 'Zakończyliśmy wykonywanie palisady betonowej, kontynuacja robót ziemnych, trwają prace nad montażem żurawia wieżowego do obsługi transportu pionowego budowy.'
    },
]

export const GaleriaData2021 = [
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
    ];

export const GaleriaData2022 = [
    {
        id: 3, //Код,
        name: "Styczeń",
        img: January2022_1, //Код картинки
        images: January2022, //Массив картинок проекта
        title: 'Styczeń 2022', //Тител
    }
];

const October2021_1 = process.env.PUBLIC_URL + '/component/galeria/october/1.jpg'
const October2021_2 = process.env.PUBLIC_URL + '/component/galeria/october/2.jpg'
const October2021_3 = process.env.PUBLIC_URL + '/component/galeria/october/3.jpg'
const October2021_4 = process.env.PUBLIC_URL + '/component/galeria/october/4.jpg'

const November2021_1 = process.env.PUBLIC_URL + '/component/galeria/november/1.jpg'
const November2021_2 = process.env.PUBLIC_URL + '/component/galeria/november/2.jpg'
const November2021_3 = process.env.PUBLIC_URL + '/component/galeria/november/3.jpg'

const January2022_1 = process.env.PUBLIC_URL + '/component/galeria/january/1.jpg'
const January2022_2 = process.env.PUBLIC_URL + '/component/galeria/january/2.jpg'
const January2022_3 = process.env.PUBLIC_URL + '/component/galeria/january/3.jpg'


const February2022_1 = process.env.PUBLIC_URL + '/component/galeria/february/1.jpg'
const February2022_2 = process.env.PUBLIC_URL + '/component/galeria/february/2.jpg'
const February2022_3 = process.env.PUBLIC_URL + '/component/galeria/february/3.jpg'

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

    {
        image: January2022_3,
        caption: 'Zakończyliśmy wykonywanie palisady betonowej, kontynuacja robót ziemnych, trwają prace nad montażem żurawia wieżowego do obsługi transportu pionowego budowy.'
    },

]

const February2022 = [

    {
        image: February2022_1,
        caption: 'Rozpoczęliśmy prace przy płycie fundamentowej, aktualnie zabetonowany został drugi segment płyty, w reżimie technologii betonu wodoszczelnego.\n' +
            '\n' +
            'Przygotowane deskowania pod wykonywanie ścian zewnętrznych garażu.'
    },
    {
        image: February2022_2,
        caption: 'Rozpoczęliśmy prace przy płycie fundamentowej, aktualnie zabetonowany został drugi segment płyty, w reżimie technologii betonu wodoszczelnego.\n' +
            '\n' +
            'Przygotowane deskowania pod wykonywanie ścian zewnętrznych garażu.'
    },
    {
        image: February2022_3,
        caption: 'Rozpoczęliśmy prace przy płycie fundamentowej, aktualnie zabetonowany został drugi segment płyty, w reżimie technologii betonu wodoszczelnego.\n' +
            '\n' +
            'Przygotowane deskowania pod wykonywanie ścian zewnętrznych garażu.'
    }

]

export const GaleriaData2021 = [
    {
        id: 1, //Code
        img: October2021_1, //Code default Picture
        name: "Październik",
        images: October2021, //Array picture images
        title: 'Październik 2021', //Title
    },
    {
        id: 2, //Code,
        name: "Listopad",
        img: November2021_1, //Code default Picture
        images: November2021, //Array picture images
        title: 'Listopad 2021', //Title
    }
    ];

export const GaleriaData2022 = [
    {
        id: 3, //Code,
        name: "Styczeń",
        img: January2022_1, //Kod picture default
        images: January2022, //Array picture images
        title: 'Styczeń 2022', //Title
    },
    {
        id: 4, //Code,
        name: "Luty",
        img: February2022_1, //Kod picture default
        images: February2022, //Array pictures
        title: 'Luty 2022', //Title
    }
];

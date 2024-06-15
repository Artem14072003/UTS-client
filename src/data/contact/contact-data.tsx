import Clock from "../../UI/icon/Clock.tsx";
import Call from "../../UI/icon/Call.tsx";
import Mail from "../../UI/icon/Mail.tsx";
import Point from "../../UI/icon/Point.tsx";

export const contact = {
    title: "О компании",
    desc: "ООО «Юнайтед Трак Сервисиз» основана в 2004 году для оказания широкого спектра услуг (продажа, сервис, запчасти) клиентам, занимающимся профессиональной деятельностью в области коммерческих перевозок по территории России и стран СНГ. С 2013 года является  официальным дилером  Mercedes - Benz Truck",
    link: "https://yandex.ru/maps/?from=mapframe&ll=37.103967%2C56.093927&mode=poi&poi%5Bpoint%5D=37.103798%2C56.093770&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1308953390&source=mapframe&um=constructor%3Aa07dfaf87cfb41d49ee038b16b58822a5cb2ea6ce0e7b51bbe631419675c7089&utm_source=mapframe&z=17" +
        "",
    info: [
        {
            icon: <Mail />,
            link: "mailto:uts@mail.ru",
            value: "UTS@gmail.com"
        }, {
        icon: <Call />,
            link: "tel:+79261866981",
            value: "+7 (926) 186-69-81"
        }, {
            icon: <Clock />,
            value: ['В буднии : 08.00-21.00', 'В выходные не работаем']
        }, {
            icon: <Point />,
            link: "https://yandex.ru/maps/?um=constructor%3Aa07dfaf87cfb41d49ee038b16b58822a5cb2ea6ce0e7b51bbe631419675c7089&source=constructorLink",
            value: "деревня Ложки, с200, городской округ Солнечногорск, Московская область"
        },
    ]
}

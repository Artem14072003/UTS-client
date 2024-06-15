import {INumberData, IStatemetsData} from "../../assets/type/type.ts";
import {formatPhoneNumberIntl} from "react-phone-number-input";

export const dataStatements: IStatemetsData = {
    title: "Подача заявок",
    name: "popappStatement",
    data: [
        {
            id: "fullName",
            title: "ФИО",
            type: "text",
            name: "fullname",
            placeholder: "Введите своё ФИО",
            option: {
                required: "Это поле обязательно!",
                pattern: {
                    value: /^([А-ЯЁ][а-яё]*(-[А-ЯЁ][а-яё]*)?)\s+([А-ЯЁ][а-яё]*)\s+([А-ЯЁ][а-яё]*(-[А-ЯЁ][а-яё]*)?)$/,
                    message: 'Некорректный формат имени',
                },
            },
        }, {
            id: "phone",
            title: "Телефон",
            type: "tel",
            name: "tel",
            placeholder: "+7 909 999 99 99",
            option: {
                required: "Это поле обязательно!",
                minLength: {
                    value: 12,
                    message: "Введите корректный номер телефона"
                },
                onChange: e => {
                    const val = e.target.value.slice(0, 16)
                    const format = formatPhoneNumberIntl(val)
                    e.target.value = format === "" ? `+7 ${val.substring(3, val.length).replace(/\D/gi, "")}`
                        : format.slice(0, 16)

                }

            }
        }, {
            id: "statemets",
            title: "Тип услуги",
            type: "select",
            name: "services",
            selections: [
                {
                    name: "",
                    value: "Выберите услугу"
                },
                {
                    name: "catalog",
                    value: "Покупка грузовика"
                },
                {
                    name: "spare-parts",
                    value: "Покупка запчастей"
                }, {
                    name: "calculators",
                    value: "Приобретения лизинга"
                },
            ],
            option: {
                required: "Это поле обязательно!",
            }
        }, {
            id: "description",
            title: "Описание",
            type: "textarea",
            name: "desc",
            placeholder: "Введите описание",
            option: {
                required: "Это поле обязательно!",
                minLength: {
                    value: 10,
                    message: "Описание должно состоять минимум из 10 символов"
                }
            }
        },
    ]
}

export const dataNumbers: INumberData = {
    title: "Позвонить сейчас",
    name: "popappNumber",
    data: [
        {
            title: "Отдел продаж:",
            number: [
                {
                    tel: "+7 (495) 308-99-99",
                    href: "+74953089999"
                },
                {
                    tel: "+7 (495) 109-99-55",
                    href: "+74951099955"
                }
            ]
        },        {
            title: "Запись на сервис:",
            number: [
                {
                    tel: "+7 (495) 308-99-99",
                    href: "+74953089999"
                },
                {
                    tel: "+7 (495) 109-99-55",
                    href: "+74951099955"
                }
            ]
        },        {
            title: "Отдел запасных частей:",
            number: [
                {
                    tel: "+7 (495) 308-99-99",
                    href: "+74953089999"
                },
                {
                    tel: "+7 (495) 109-99-55",
                    href: "+74951099955"
                }
            ]
        },

    ]
}

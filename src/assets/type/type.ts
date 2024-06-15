// data
import {Dispatch, ReactNode, SetStateAction} from "react";
import {
    FieldError,
    FieldErrorsImpl,
    Merge,
    RegisterOptions, UseFormGetValues,
    UseFormRegister, UseFormSetValue, UseFormWatch
} from "react-hook-form";

export interface INav {
    name: string;
    to?: string;
    type?: string
}

export interface INavFooter extends Pick<INav, "name"> {
    title: string;
    data: INav[];
}

export interface IBrands extends Pick<INav, "name"> {
    image: string;
}

export interface IServices extends Pick<INavFooter, "title"> {
    bg: string;
    icon: string;
    desc: string
}

// Popapp
export interface IPoppappVar {
    popappStatement: boolean;
    popappNumber: boolean;
    popappSpareParts: boolean;
    message: string,
}

export interface SetPopapp {
    setPopapp: Dispatch<SetStateAction<IPoppappVar>>
}

interface IPopapp extends Omit<SetPopapp, ""> {
    popapp: IPoppappVar;
}

export interface IPopappContext {
    popapp: IPoppappVar;
    setPopapp: null | Dispatch<SetStateAction<IPoppappVar>>,
}

export interface IAdvantages extends Omit<IServices, "bg"> {
}

// Component

export interface IHeader extends Omit<IPopapp, "popapp"> {
}

export interface IFooter extends Omit<IPopapp, "popapp"> {
}

export interface ICard {
    id: number;
    image: string;
    title: string;
    price: number;
    model: string;
    isHTwo?: boolean;
    isSpareParts?: boolean;
}

export interface IComponentPopapp {
    children: ReactNode,
    title: string,
    className?: string,
    name: "popappStatement" | "popappNumber" | "popappSpareParts"
    setPopapp: null | Dispatch<SetStateAction<IPoppappVar>>,
}

export interface DateStatements {
    fullname: string;
    tel: string;
    services: string;
    desc: string;
}

type TNameStaments = "fullname" | "tel" | "services" | "desc";

export interface ISelections {
    name: string,
    value: string
}

export interface IInputStatement {
    id: string;
    title?: string;
    type?: "textarea" | 'select' | 'calc' | string;
    name: TNameStaments;
    option?: RegisterOptions;
    optionRang?: RegisterOptions;
    selections?: ISelections[];
    selectionsNum?: number[];
    placeholder?: string;
    max?: number;
    min?: number;
    register?: UseFormRegister<any>;
    errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

export interface IInput extends Omit<IInputStatement, "name"> {
    name: string;
}

export interface IFilter extends Omit<IInput, "errors"> {
}

export interface IComponentFilter {
    data: IDataProduct[];
    setNewData: null | Dispatch<SetStateAction<IDataProduct[] | null>>
}

interface IStatementsInput extends Omit<IInputStatement, "register" | "errors"> {
    selections?: ISelections[]
}

export interface IStatemetsData extends Omit<IComponentPopapp, "children" | "className" | "setPopapp"> {
    data: IStatementsInput[];
}

export interface INumberData extends Omit<IComponentPopapp, "children" | "className" | "setPopapp"> {
    data: INumberContent[];
}

interface INumber {
    tel: string;
    href: string
}

interface INumberContent extends Pick<IStatemetsData, "title"> {
    number: INumber[];
}

export interface IDataCalculater {
    minlizing: number,
    maxlizing: number,
    percent: number,
    term: number[]
}

export interface dataCalc {
    lizing: number,
    lizingRang: number,
    contribution: number,
    contributionRang: number,
    years: number
}

export interface ICalcInputs {
    data: IDataCalculater,
    register: UseFormRegister<dataCalc>,
    watch: UseFormWatch<dataCalc>;
    setValue: UseFormSetValue<dataCalc>;
    getValues: UseFormGetValues<dataCalc>
}

export interface ICalcResult extends Pick<ICalcInputs, "data" | "watch"> {
}

export type TNameInput = "lizing" | "lizingRang" | "contribution" | "contributionRang" | "years";

export interface ISetInput extends Omit<ICalcInputs, 'register'> {
    option: { max: number, min: number };
    name: TNameInput;
    nameOption: TNameInput;
    max?: number;
}

export interface IBlurInput extends Pick<ISetInput, "watch" | "option" | "setValue" | "data"> {
}

export interface IDataTruck extends Omit<ICard, 'isHTwo'> {
}

export interface IPagination {
    start: number;
    end: number
}

export interface IWrapperCard extends Pick<IComponentPopapp, "className"> {
    data: IDataTruck[];
    pagination?: IPagination;
    title?: string;
}

export interface ILogin {
    login: string,
    password: string
}

export interface IOptionSpateParts {
    title: string;
    value: string
}

export interface IDataSpareParts {
    image: string;
    title: string;
    option: IOptionSpateParts[]
}

export interface IPopappSpareParts {
    data: IDataSpareParts
}

export interface IComponentTable {
    data: IOptionSpateParts[];
    title?: string;
    nameTable?: string;
}

export interface IDataSwipers extends Omit<IDataSpareParts, "option"> {
    id: number;
}

export interface IComponentSwiper {
    title?: string;
    swipers: IDataSwipers[];
}

export interface IDataProduct extends Omit<ICard, "isHTwo" | "isSpareParts"> {
}

export interface ICardInfo {
    title: string;
    desc: string;
    price: number
}


export interface IFooterColumn extends Pick<IComponentPopapp, "setPopapp" | 'title'> {
    name: string;
    data: INav[];
    pathname: string;
    isStatement: (name: string) => "popappStatement" | "popappNumber"
}

export interface ILoading {
    image?: 'truck.svg' | 'spare-parts.png' | 'calc.svg'
}

export interface IAdaptiveMenu extends Pick<IComponentPopapp, 'setPopapp'>{
    nav: INav[];
    setActive: Dispatch<SetStateAction<boolean>>;
    active: boolean;
    pathname: string;
}
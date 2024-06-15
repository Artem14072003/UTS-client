import {useContext} from "react";
import {PopappContext} from "../context/popappContext.tsx";

export default function usePopapp() {
    return useContext(PopappContext)
}
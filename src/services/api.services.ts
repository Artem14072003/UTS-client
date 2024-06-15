import axiosConfig from "./axiosConfig.ts";
import {DateStatements} from "../assets/type/type.ts";

class ApiServices {

    async getCSRF() {
        return await axiosConfig.get('/sanctum/csrf-cookie')
    }

    async postMail(data: DateStatements) {
        await this.getCSRF();
        return await axiosConfig.post('/api/mail-to', data)
    }

    async getHome() {
        return await (await axiosConfig.get('/api/home')).data
    }

    async getCatalog() {
        return await (await axiosConfig.get('/api/catalog')).data
    }

    async getTruck(id: string | undefined) {
        return await (await axiosConfig.get(`/api/catalog/${id}`)).data
    }

    async getSpareParts() {
        return await (await axiosConfig.get('/api/spare-parts')).data
    }

    async getSparePart(id: string | undefined) {
        return await (await axiosConfig.get(`/api/spare-parts/${id}`)).data
    }

    async getCalc() {
        return await (await axiosConfig.get(`/api/calculators`)).data[0]
    }
}

export const apiServices = new ApiServices();
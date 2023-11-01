import { IBrand, IBrandName } from '@/shared/interfaces/brand.interface'
import axios from 'axios'

const BRANDS = '/api/brands'

export const BrandsService = {
	async brandById(brandId: string) {
		return await axios.get<IBrand>(`${BRANDS}/${brandId}`)
	},

	async getSimilarById(brandId: string) {
		return await axios.get(`${BRANDS}/similar/${brandId}`)
	},

	async getAll() {
		return await axios.get<IBrandName[]>(BRANDS)
	},
}

import { IBrandResponse } from '@/shared/interfaces/brand.interface'
import { IFilterOptions } from '@/shared/interfaces/filter-options.interface'
import axios from 'axios'

const BRANDS = '/api/brands'

export const BrandsService = {
	async brandById(brandId: string) {
		return await axios.get(`${BRANDS}/${brandId}`)
	},

	async getSimilarById(brandId: string) {
		return await axios.get(`${BRANDS}/similar/${brandId}`)
	},

	async getFilteredBrands(options: IFilterOptions) {
		const response = await axios.get<IBrandResponse>(
			`${BRANDS}?searchTerm=a`
		)

		return response
	},
}

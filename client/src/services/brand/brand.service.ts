import { IBrandResponse } from '@/shared/interfaces/brand.interface'
import { IFilterOptions } from '@/shared/interfaces/filter-options.interface'
import { getString } from '@/utils/getString'
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
		// const QUERY = `?searchTerm=${options.searchTerm}&orderBy=${
		// 	options.sortBy
		// }&offerType=${getString(options.offerType)}&categories=${getString(
		// 	options.categories
		// )}`

		const QUERY = `?searchTerm=${
			options.searchTerm || ''
		}&categories=${getString(options.categories)}`

		return await axios.get<IBrandResponse>(`${BRANDS}${QUERY}`)
	},
}

import { ICategory } from '@/shared/interfaces/filter-options.interface'
import axios from 'axios'

const CATEGORIES = '/api/categories'

export const CategoryService = {
	async getAll() {
		const categories = await axios.get<ICategory[]>(`${CATEGORIES}`)

		return categories
	},
}

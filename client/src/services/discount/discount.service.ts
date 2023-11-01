import { IDiscountResponse } from '@/shared/interfaces/discount.interface'
import { IFilterOptions } from '@/shared/interfaces/filter-options.interface'
import { getString } from '@/utils/getString'
import axios from 'axios'

const DISCOUNT = '/api/discounts'

export const DiscountService = {
	async getAll(options: IFilterOptions) {
		const params = {
			...options,
			offerTypes: getString(options.offerTypes) || 'student-discount',
			...(options.brands?.length && {
				brands: getString(options.brands),
			}),
		}

		return await axios.get<IDiscountResponse>(`${DISCOUNT}`, {
			params,
		})
	},
}

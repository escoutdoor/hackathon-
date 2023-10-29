import { IDiscountResponse } from '@/shared/interfaces/discount.interface'
import { IFilterOptions } from '@/shared/interfaces/filter-options.interface'
import { getString } from '@/utils/getString'
import axios from 'axios'

const DISCOUNT = '/api/discounts'

export const DiscountService = {
	async getAll(options: IFilterOptions) {
		return await axios.get<IDiscountResponse>(`${DISCOUNT}`, {
			params: {
				...options,
				offerTypes: getString(options.offerTypes),
			},
		})
	},
}

import { ISidebar } from '@/shared/interfaces/sidebar.interface'

export const SideBarData: ISidebar = {
	offerTypes: [
		{
			name: 'Student Discount',
			slug: 'student-discount',
		},
		{
			name: 'General Sale',
			slug: 'general-sale',
		},
		{
			name: 'Freebie',
			slug: 'freebie',
		},
		{
			name: 'Competition',
			slug: 'competition',
		},
	],
	brands: [],
	sortBy: [
		{
			name: 'Most Popular',
			value: 'popularity',
		},
		{
			name: 'New in',
			value: 'date',
		},
	],
}

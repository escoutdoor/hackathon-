import s from './sidebar.module.scss'
import { FC } from 'react'
import { useModifyParams } from '@/hooks/useModifyParams'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { useFilterParams } from '@/hooks/useFilterParams'
import SidebarItem from './sidebar-item/SidebarItem'
import { ISidebar } from '@/shared/interfaces/sidebar.interface'

const SideBar: FC<{ data: ISidebar }> = ({ data }) => {
	const { updateQueryParam } = useModifyParams()

	const { query, offerTypes, brands, sortBy } = useFilterParams()

	console.log(offerTypes)

	return (
		<div className={s.sidebar}>
			<SidebarItem title="Offer type">
				{data.offerTypes.map(offerType => (
					<Checkbox
						key={offerType.slug}
						title={offerType.name}
						onClick={() =>
							updateQueryParam(
								'offer-types',
								offerType.slug,
								true
							)
						}
						active={offerTypes.some(ot => ot === offerType.slug)}
					/>
				))}
			</SidebarItem>
			<SidebarItem title="Brands">
				{data.brands.map(brand => (
					<Checkbox
						key={brand}
						title={brand}
						onClick={() => updateQueryParam('brands', brand, true)}
						active={brands.some(b => b === brand)}
					/>
				))}
			</SidebarItem>
			<SidebarItem title="Sort By">
				{data.sortBy.map(sort => (
					<Checkbox
						key={sort.value}
						title={sort.name}
						onClick={() => updateQueryParam('sortBy', sort.value)}
						active={sortBy === sort.value}
					/>
				))}
			</SidebarItem>
		</div>
	)
}

export default SideBar

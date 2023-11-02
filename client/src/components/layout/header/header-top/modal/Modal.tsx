import { IModalProps } from '@/interfaces/header-top-module.interface'
import React from 'react'
import { GrClose } from 'react-icons/gr'
import s from './modal.module.scss'
import Categories from './categories/Categories'
import { useRouter } from 'next/navigation'
import { useFilterParams } from '@/hooks/useFilterParams'
import { useModifyParams } from '@/hooks/useModifyParams'

const Modal: React.FC<IModalProps> = ({ isOpen = false, onCloseRequest }) => {
	const { push } = useRouter()

	const { updateQueryParam } = useModifyParams()
	const { query } = useFilterParams()

	if (!isOpen) {
		return null
	}

	const onEnter = (e: React.KeyboardEvent) => {
		if (e.key !== 'Enter') {
			return
		}

		push(`/search-discount?q=${query}`)
		onCloseRequest(e)
	}

	return (
		<div className={s.modal}>
			<div className={s.modalWrap}>
				<div className={s.modalItems}>
					<GrClose onClick={onCloseRequest} className={s.close} />
					<div className={s.content}>
						<input
							type="text"
							onKeyDown={onEnter}
							className={s.search}
							onChange={e =>
								updateQueryParam('q', e.target.value)
							}
							value={query}
							placeholder="Brands, items or categories"
						/>
					</div>
					<Categories />
				</div>
			</div>
		</div>
	)
}
export default Modal

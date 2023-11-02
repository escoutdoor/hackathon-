'use client'
import s from './header-top.module.scss'
import { FC, useState } from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import PurpleLink from '@/components/ui/purple-link/PurpleLink'
import Link from 'next/link'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'
import Modal from '@/components/layout/header/header-top/modal/Modal'


const HeaderTop: FC = () => {
	const { push } = useRouter()

	const [isModalOpen, setIsModalOpen] = useState(false);
	const onModalCloseRequest = (): void => {
    setIsModalOpen(false);
  };

	return (
		<>
			<div className={s.top}>
				<Link href={'/'}>
					<Image
						width={200}
						height={60}
						src='/images/logo/logo.png'
						alt='logo'
					/>
				</Link>

				<div className={s.search} onClick={() => setIsModalOpen(true)}>
					<FiSearch/>
					<p className={s.input}>Search Student Beans</p>
				</div>
				<div className={s.auth}>
					<PurpleLink href='/auth?tab=login'>Login</PurpleLink>
					<Button
						style={{
							width: '120px',
						}}
						onClick={() => push('/auth?tab=register')}
					>
						Register
					</Button>
				</div>
				
			</div>
			<Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest}/>
		</>
	)
}
export default HeaderTop

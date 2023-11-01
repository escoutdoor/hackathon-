import { FC } from 'react'
import s from './loader.module.scss'

const Loader: FC = () => {
	return (
		<div className={s.loaderBlock}>
			<div className={s.loader} />
		</div>
	)
}
export default Loader

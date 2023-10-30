import Link from 'next/link';
import s from './categories.module.scss'
import Image from 'next/image';
import { categoryItem } from '@/helpers/header-module-window.data';

const Categories:React.FC = () => {
	
	return (
		<div className={s.categories}>
			<p>Recommended For You</p>
			<div className={s.categoriesWrap}>
				<div className={s.category}>
					<div className={s.blockWrap}>
							{categoryItem.map((item) => 
								<Link href={`/category${item.href}`}>
									<div className={s.block}>
											<Image
												width={50}
												height={50}
												alt='img'
												src={item.image}/>
												<div className={s.contentBlock}>
													<p className={s.title}>{item.title}</p>
													<p className={s.news}>{item.news}</p>
													<p className={s.info}>{item.info}</p>
												</div>
									</div>
								</Link>
								)}		
					</div>
				</div>
			</div>
		</div>
	)
}
export default Categories;



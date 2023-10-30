import { IModalProps } from '@/interfaces/header-top-module.interface';
import React from 'react';
import {GrClose} from 'react-icons/gr'
import s from './modal.module.scss'
import Categories from './categories/Categories';


const Modal:React.FC<IModalProps> = ({ isOpen = false, onCloseRequest }) => {
	if (!isOpen) {
    return null;
  }

	return (
		<div className={s.modal} >
			<div className={s.modalWrap}>
				<div className={s.modalItems}>
					<GrClose onClick={onCloseRequest} className={s.close}/>
					<div className={s.content}>
						<input type="text" className={s.search} placeholder='Brands, items or categories'/>
					</div>
					<Categories/>
				</div>
			</div>
		</div>
	)
}
export default Modal;
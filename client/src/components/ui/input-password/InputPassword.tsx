'use client'
import { FC, useState } from "react";
import s from './input-password.module.scss'
import { BsEye, BsEyeSlash } from "react-icons/bs";



const InputPassword:FC<{text: string}> = ({text}) => {
	const [visible, setVisibility] = useState<boolean>(false)
	return (
		<div className={s.inputBlocks} onClick={() => setVisibility(!visible)}>
			<p>{text}</p>
				<input type={visible ? 'text' : 'password'} className={s.input}/>
				{!visible ? <BsEye className={s.icon}/> : <BsEyeSlash className={s.icon}/>}
			</div>
	)
}
export default InputPassword;
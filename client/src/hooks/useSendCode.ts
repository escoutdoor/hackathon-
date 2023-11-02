'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import emailjs from '@emailjs/browser'

interface ISendCode {
	setActivePage: Dispatch<SetStateAction<string>>
}

export const useSendCode = ({ setActivePage }: ISendCode) => {
	const [verificationCode, setVerificationCode] = useState<string>('')

	const templateParams = {
		user_email: '',
		verify_code: '',
	}

	const sendEmail = (studentEmail: string) => {
		genVerifyCode()
		templateParams.user_email = studentEmail

		templateParams.verify_code &&
			emailjs
				.send(
					'service_pyb3ye7',
					'template_ysyimp5',
					templateParams,
					't8WwLokaiJvDV-f6A'
				)
				.then(() => {
					setVerificationCode(templateParams.verify_code)
					setActivePage('checkemail')
					console.log(templateParams.verify_code)
				})
	}

	const genVerifyCode = () => {
		const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		const codeLength = 5
		let code = ''
		for (let i = 0; i <= codeLength; i++) {
			let randomNumber = Math.floor(Math.random() * chars.length)
			code += chars.substring(randomNumber, randomNumber + 1)
		}
		templateParams.verify_code = code
	}

	return { sendEmail, verificationCode }
}

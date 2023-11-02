import { useState } from "react"
import {BsEye, BsEyeSlash} from 'react-icons/bs'


const usePasswordToggle = () => {
	const [visible, setVisibility ] = useState(false)
	const IconVis = () => {
		return BsEye
	}
	const IconSet = () => {
		return BsEyeSlash
	}
	return {
		visible, setVisibility
	}
}

export default usePasswordToggle
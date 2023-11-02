import { useState } from "react"


const usePasswordToggle = () => {
	const [visible, setVisibility ] = useState(false)
	return {
		visible, setVisibility
	}
}

export default usePasswordToggle
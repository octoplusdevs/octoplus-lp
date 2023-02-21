import { useState } from 'react'

export default function useMobileView() {
	const [isMobile, setIsMobile] = useState(false)

	function handleToggleMenu() {
		setIsMobile(!isMobile)
	}

	return { isMobile, handleToggleMenu }
}

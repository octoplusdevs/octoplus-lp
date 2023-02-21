import { Header } from '@/components/header'
import Headline from '@/sections/headline'
import { headerLinks } from '@/utils/data'
import useMobileView from '@/hooks/useMobileView'
import { Wrapper as Main } from '@/styles/home'

export default function Home() {
	const { isMobile, handleToggleMenu } = useMobileView()
	return (
		<Main>
			<Header
				links={headerLinks}
				onToggleMenu={handleToggleMenu}
				isMobile={isMobile}
			/>
			<Headline />
		</Main>
	)
}

import { headerLinks } from '@/utils/data'
import useMobileView from '@/hooks/useMobileView'
import { Wrapper as Main } from '@/styles/home'
import { SectionHeadline, SectionPortifolio, SectionServices } from '@/sections'
import { Header, Portifolio } from '@/components'

export default function Home() {
	const { isMobile, handleToggleMenu } = useMobileView()
	return (
		<Main>
			<Header
				links={headerLinks}
				onToggleMenu={handleToggleMenu}
				isMobile={isMobile}
			/>
			<SectionHeadline />
			<SectionServices />
			<SectionPortifolio />
		</Main>
	)
}

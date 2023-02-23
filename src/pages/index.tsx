import { headerLinks } from '@/utils/data'
import useMobileView from '@/hooks/useMobileView'
import { Wrapper as Main } from '@/styles/home'
import { SectionHeadline, SectionPortifolio, SectionServices } from '@/sections'
import { Header, Portifolio } from '@/components'
import { useRouter } from 'next/router'

export default function Home() {
	const { isMobile, handleToggleMenu } = useMobileView()
	const router = useRouter()
	const activedSection = router.asPath.split('#')[1] || 'home'

	return (
		<Main id="top">
			<Header
				links={headerLinks}
				onToggleMenu={handleToggleMenu}
				isMobile={isMobile}
				activedSection={activedSection}
			/>
			<SectionHeadline id="headline" />
			<SectionServices id="services" />
			<SectionPortifolio id="projects" />
		</Main>
	)
}

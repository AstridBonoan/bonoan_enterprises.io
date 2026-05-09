import { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { DemosPage } from './components/DemosPage'
import { OurTeamPage } from './components/OurTeamPage'
import './index.css'

function App() {
  const { isDark, toggleTheme } = useTheme()
  const [contactSubject, setContactSubject] = useState('')
  const getRoute = () => window.location.hash.replace('#', '') || '/'
  const [pathname, setPathname] = useState(getRoute())

  useEffect(() => {
    const handleHashChange = () => setPathname(getRoute())

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (path: string) => {
    if (getRoute() !== path) {
      window.location.hash = path
      setPathname(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePricingSelect = (subject: string) => {
    setContactSubject(subject)
    navigateTo('/contact')
  }

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-200">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} pathname={pathname} onNavigate={navigateTo} />
      <main>
        {pathname === '/' && <Hero onNavigate={navigateTo} />}
        {pathname === '/services' && <Services />}
        {pathname === '/pricing' && <Pricing onSelect={handlePricingSelect} />}
        {pathname === '/contact' && <ContactForm subject={contactSubject} />}
        {pathname === '/demos' && <DemosPage />}
        {pathname === '/team' && <OurTeamPage />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  )
}

export default App

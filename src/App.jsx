import { createContext, useContext, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CvModal from './components/CvModal'
import es from './i18n/es'
import en from './i18n/en'

export const I18nContext = createContext(null)

export function useI18n() {
  return useContext(I18nContext)
}

export default function App() {
  const [lang, setLang] = useState('es')
  const [cvOpen, setCvOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = lang === 'es' ? es : en

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <I18nContext.Provider value={{ t, lang, toggleLang }}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Navbar onOpenCv={() => setCvOpen(true)} />
        <Hero onOpenCv={() => setCvOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />

        {/* Scroll to top flotante */}
        <Fab
          size="small"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
            color: '#fff',
            opacity: showScrollTop ? 1 : 0,
            transform: showScrollTop ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            pointerEvents: showScrollTop ? 'auto' : 'none',
            boxShadow: '0 4px 16px rgba(124,58,237,0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #9D5FF0, #7C3AED)',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </I18nContext.Provider>
  )
}

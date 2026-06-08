import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ArticleIcon from '@mui/icons-material/Article'
import { useI18n } from '../App'

const NAV_IDS = ['about', 'experience', 'skills', 'projects', 'contact']

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ onOpenCv }) {
  const { t, lang, toggleLang } = useI18n()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      // Fade in over first 150px of scroll
      setScrollProgress(Math.min(y / 150, 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgOpacity = (scrollProgress * 0.92).toFixed(2)
  const blurAmount = Math.round(scrollProgress * 12)
  const elevated = scrollProgress > 0.1

  const navLabels = {
    about: t.nav.about,
    experience: t.nav.experience,
    skills: t.nav.skills,
    projects: t.nav.projects,
    contact: t.nav.contact,
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: `rgba(10,10,10,${bgOpacity})`,
          backdropFilter: scrollProgress > 0 ? `blur(${blurAmount}px)` : 'none',
          borderBottom: elevated ? '1px solid rgba(124,58,237,0.18)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: 1100, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              letterSpacing: '-0.5px',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            NLS
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {NAV_IDS.map((id) => (
              <Button
                key={id}
                onClick={() => scrollTo(id)}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  width: 115,
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {navLabels[id]}
              </Button>
            ))}

            {/* Language toggle */}
            <Button
              onClick={toggleLang}
              sx={{
                ml: 1,
                fontSize: '0.8rem',
                fontWeight: 700,
                width: 40,
                flexShrink: 0,
                px: 0,
                letterSpacing: 1,
                color: 'text.secondary',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 1.5,
                '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'transparent' },
              }}
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </Button>

            <Button
              variant="outlined"
              size="small"
              startIcon={<ArticleIcon />}
              onClick={onOpenCv}
              sx={{
                ml: 1,
                width: 100,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: '#fff',
                },
              }}
            >
              {t.nav.viewCv}
            </Button>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <Button
              onClick={toggleLang}
              sx={{
                fontSize: '0.8rem', fontWeight: 700, width: 40, flexShrink: 0, px: 0,
                letterSpacing: 1, color: 'text.secondary',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: 1.5,
                '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'transparent' },
              }}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </Button>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 260, bgcolor: '#111111', borderLeft: '1px solid rgba(124,58,237,0.2)' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(124,58,237,0.2)' }} />
        <List>
          {NAV_IDS.map((id) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollTo(id)
                  setDrawerOpen(false)
                }}
              >
                <ListItemText
                  primary={navLabels[id]}
                  primaryTypographyProps={{ color: 'text.secondary', fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(124,58,237,0.2)' }} />
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<ArticleIcon />}
            onClick={() => {
              onOpenCv()
              setDrawerOpen(false)
            }}
            fullWidth
            sx={{ borderColor: 'primary.main', color: 'primary.main' }}
          >
            {t.nav.viewCv}
          </Button>
        </Box>
      </Drawer>
    </>
  )
}

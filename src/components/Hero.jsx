import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import { motion } from 'framer-motion'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArticleIcon from '@mui/icons-material/Article'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { useI18n } from '../App'

const MotionBox = motion(Box)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero({ onOpenCv }) {
  const { t } = useI18n()

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      {/* Background gradient orbs */}
      <Box sx={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        top: '10%', left: '-10%', pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        bottom: '10%', right: '-5%', pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ pt: 10, pb: 6, position: 'relative', zIndex: 1 }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          gap: { xs: 6, md: 6 },
        }}>

          {/* Left: text content */}
          <Box sx={{ maxWidth: 660, flex: 1 }}>

            {/* Greeting */}
            <MotionBox {...fadeUp(0.1)}>
              <Typography variant="body1" sx={{
                color: 'secondary.main', fontWeight: 600,
                letterSpacing: 2, textTransform: 'uppercase',
                fontSize: '0.85rem', mb: 2,
              }}>
                {t.hero.greeting}
              </Typography>
            </MotionBox>

            {/* Name */}
            <MotionBox {...fadeUp(0.2)}>
              <Typography variant="h2" sx={{
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' },
                fontWeight: 700, mb: 1,
                background: 'linear-gradient(135deg, #F1F5F9 0%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                {t.hero.name}
              </Typography>
            </MotionBox>

            {/* Impactful headline */}
            <MotionBox {...fadeUp(0.3)}>
              <Typography variant="h1" sx={{
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
                fontWeight: 800, lineHeight: 1.1, mb: 3,
                whiteSpace: 'pre-line',
                background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 60%, #9D5FF0 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                {t.hero.headline}
              </Typography>
            </MotionBox>

            {/* Subtitle */}
            <MotionBox {...fadeUp(0.45)}>
              <Typography variant="h6" sx={{
                color: 'text.secondary', fontWeight: 400, mb: 5,
                maxWidth: 540, lineHeight: 1.7,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
              }}>
                {t.hero.subtitle}
              </Typography>
            </MotionBox>

            {/* CTA Buttons */}
            <MotionBox {...fadeUp(0.55)} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<FolderOpenIcon />}
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                  px: 3.5, py: 1.4, fontSize: '1rem',
                  boxShadow: '0 4px 24px rgba(124,58,237,0.35)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #9D5FF0, #7C3AED)',
                    boxShadow: '0 6px 32px rgba(124,58,237,0.5)',
                  },
                }}
              >
                {t.hero.ctaProjects}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArticleIcon />}
                onClick={onOpenCv}
                sx={{
                  borderColor: 'rgba(124,58,237,0.6)', color: 'primary.light',
                  px: 3.5, py: 1.4, fontSize: '1rem',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(124,58,237,0.08)' },
                }}
              >
                {t.hero.ctaCv}
              </Button>
            </MotionBox>

          </Box>

          {/* Right: avatar with glow */}
          <MotionBox
            {...fadeIn(0.35)}
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              {/* Glow rings */}
              <Box sx={{
                position: 'absolute', inset: -20,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(6,182,212,0.15) 50%, transparent 70%)',
                filter: 'blur(16px)',
                animation: 'pulse 3s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
                  '50%': { opacity: 1, transform: 'scale(1.06)' },
                },
              }} />

              {/* Decorative ring */}
              <Box sx={{
                position: 'absolute', inset: -4,
                borderRadius: '50%',
                border: '2px solid transparent',
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                maskComposite: 'exclude',
              }} />

              <Avatar
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Nicolás Loza Spataro"
                sx={{
                  width: { xs: 240, md: 370 },
                  height: { xs: 240, md: 370 },
                  fontSize: { xs: '3.5rem', md: '4.5rem' },
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #1a0533 0%, #0d1f33 100%)',
                  color: '#7C3AED',
                  border: '3px solid rgba(124,58,237,0.3)',
                  position: 'relative',
                  zIndex: 1,
                  letterSpacing: '-2px',
                  filter: 'brightness(1.05) contrast(1.08) saturate(1.1)',
                }}
              />
            </Box>
          </MotionBox>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <MotionBox
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        sx={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <IconButton
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{ color: 'text.secondary', border: '1px solid rgba(255,255,255,0.1)', p: 1.2 }}
            size="small" title={t.hero.scrollDown}
          >
            <ArrowDownwardIcon fontSize="small" />
          </IconButton>
        </motion.div>
      </MotionBox>
    </Box>
  )
}

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { FaLinkedinIn } from 'react-icons/fa6'
import { useI18n } from '../App'

const MotionBox = motion(Box)

function SectionTitle({ children }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 1 }}>
        {children}
      </Typography>
      <Box sx={{ width: 60, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }} />
    </Box>
  )
}

function ContactCard({ icon, label, value, href, delay }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
    >
      <Paper
        elevation={0}
        component={href ? Link : 'div'}
        href={href}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        underline="none"
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          bgcolor: 'background.paper',
          border: '1px solid rgba(124,58,237,0.15)',
          borderRadius: 3,
          cursor: href ? 'pointer' : 'default',
          transition: 'all 0.25s ease',
          '&:hover': href
            ? {
                borderColor: 'rgba(124,58,237,0.4)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(124,58,237,0.12)',
              }
            : {},
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            bgcolor: 'rgba(124,58,237,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.3 }}>
            {label}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', wordBreak: 'break-word' }}>
            {value}
          </Typography>
        </Box>
      </Paper>
    </MotionBox>
  )
}

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact

  const items = [
    {
      icon: <EmailIcon sx={{ color: 'primary.main' }} />,
      label: c.email,
      value: 'n.lozaspataro@gmail.com',
      href: 'mailto:n.lozaspataro@gmail.com',
    },
    {
      icon: <PhoneIcon sx={{ color: 'secondary.main' }} />,
      label: c.phone,
      value: '+51 911 5622 6313',
      href: 'tel:+519115622 6313',
    },
    {
      icon: <LocationOnIcon sx={{ color: '#34D399' }} />,
      label: c.location,
      value: c.locationValue,
      href: null,
    },
    {
      icon: <Box sx={{ color: '#0A66C2', display: 'flex', alignItems: 'center' }}><FaLinkedinIn size={20} /></Box>,
      label: 'LinkedIn',
      value: 'Conectar →',
      href: 'https://www.linkedin.com/in/nicolas-loza-spataro/',
    },
  ]

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid rgba(124,58,237,0.1)',
      }}
    >
      {/* Contact content */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          {/* Availability badge */}
          <Box
            sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1,
              px: 1.8, py: 0.6, borderRadius: 10, mb: 3,
              bgcolor: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.25)',
            }}
          >
            <Box sx={{
              width: 8, height: 8, borderRadius: '50%', bgcolor: '#10B981', flexShrink: 0,
              animation: 'blink 2s ease-in-out infinite',
              '@keyframes blink': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.3 },
              },
            }} />
            <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600, letterSpacing: 0.5 }}>
              Disponible para proyectos
            </Typography>
          </Box>

          <SectionTitle>{c.sectionTitle}</SectionTitle>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 520 }}>
            {c.subtitle}
          </Typography>
        </MotionBox>

        <Grid container spacing={2.5}>
          {items.map((item, idx) => (
            <Grid item xs={12} sm={6} key={item.label}>
              <ContactCard {...item} delay={idx * 0.1} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer — full-width, darker bg */}
      <Box sx={{ bgcolor: 'background.default', borderTop: '1px solid rgba(124,58,237,0.12)' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              py: 2.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {/* Izquierda: nombre + cargo */}
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}>
                Nicolás Loza Spataro
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Full Stack Developer
              </Typography>
            </Box>

            {/* Centro: ícono LinkedIn */}
            <Box
              component="a"
              href="https://www.linkedin.com/in/nicolas-loza-spataro/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 40, height: 40,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                bgcolor: 'background.paper',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 2,
                color: 'text.secondary',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                '&:hover': { bgcolor: 'rgba(10,102,194,0.12)', color: '#0A66C2', borderColor: 'rgba(10,102,194,0.35)', transform: 'translateY(-2px)' },
              }}
            >
              <FaLinkedinIn size={16} />
            </Box>

            {/* Derecha: copyright */}
            <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.55 }}>
              © {new Date().getFullYear()} Nicolás Loza Spataro. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

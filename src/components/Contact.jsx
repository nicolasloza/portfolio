import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { FaLinkedinIn } from 'react-icons/fa6'
import { useI18n } from '../App'

const MotionBox = motion(Box)

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeewgyrg'

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
      sx={{ flexGrow: 1 }}
    >
      <Paper
        elevation={0}
        component={href ? Link : 'div'}
        href={href}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        underline="none"
        sx={{
          p: 2.5,
          height: '100%',
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
            width: 44,
            height: 44,
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
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', wordBreak: 'break-word' }}>
            {value}
          </Typography>
        </Box>
      </Paper>
    </MotionBox>
  )
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactForm() {
  const { t } = useI18n()
  const f = t.contact.form
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({ email: false })
  const [status, setStatus] = useState('idle')

  const emailError = touched.email && fields.email && !EMAIL_RE.test(fields.email)
  const isValid = fields.name.trim() && EMAIL_RE.test(fields.email) && fields.message.trim()

  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value })
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...fields, _subject: '[CONTACTO PORTFOLIO]' }),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      bgcolor: 'background.default',
      borderRadius: 2,
      '& fieldset': { borderColor: 'rgba(124,58,237,0.2)' },
      '&:hover fieldset': { borderColor: 'rgba(124,58,237,0.4)' },
      '&.Mui-focused fieldset': { borderColor: '#7C3AED' },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#7C3AED' },
  }

  if (status === 'success') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, py: 6 }}>
        <CheckCircleOutlineIcon sx={{ fontSize: 56, color: '#10B981' }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>{f.successTitle}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>{f.successText}</Typography>
        <Button onClick={() => setStatus('idle')} sx={{ color: 'primary.main', mt: 1 }}>{f.sendAnother}</Button>
      </Box>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <TextField
        label={f.name}
        name="name"
        value={fields.name}
        onChange={handleChange}
        required
        fullWidth
        size="small"
        sx={inputSx}
      />
      <TextField
        label={f.email}
        name="email"
        type="email"
        value={fields.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={emailError}
        helperText={emailError ? f.emailError : ''}
        required
        fullWidth
        size="small"
        sx={inputSx}
      />
      <TextField
        label={f.message}
        name="message"
        value={fields.message}
        onChange={handleChange}
        required
        fullWidth
        multiline
        rows={5}
        sx={inputSx}
      />
      {status === 'error' && (
        <Typography variant="caption" sx={{ color: '#EF4444' }}>{f.error}</Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        disabled={!isValid || status === 'loading'}
        endIcon={status === 'loading' ? <CircularProgress size={16} color="inherit" /> : <SendIcon />}
        sx={{
          alignSelf: 'flex-end',
          px: 3.5,
          background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
          '&:hover': { background: 'linear-gradient(135deg, #9D5FF0, #7C3AED)' },
          '&.Mui-disabled': { opacity: 0.6 },
        }}
      >
        {status === 'loading' ? f.sending : f.send}
      </Button>
    </Box>
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
      value: '+54 911 5622 6313',
      href: 'tel:+5491156226313',
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
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>{c.sectionTitle}</SectionTitle>
        </MotionBox>

        <Grid container spacing={4} alignItems="stretch">
          {/* Izquierda: tarjetas de contacto */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
              {items.map((item, idx) => (
                <ContactCard {...item} key={item.label} delay={idx * 0.1} />
              ))}
            </Box>
          </Grid>

          {/* Derecha: formulario */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  bgcolor: 'background.default',
                  border: '1px solid rgba(124,58,237,0.15)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  {c.form.title}
                </Typography>
                <ContactForm />
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
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
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}>
                Nicolás Loza Spataro
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Full Stack Developer
              </Typography>
            </Box>

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

            <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.55 }}>
              © {new Date().getFullYear()} Nicolás Loza Spataro. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

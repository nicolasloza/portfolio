import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useI18n } from '../App'

const MotionBox = motion(Box)

function SectionTitle({ children }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          mb: 1,
        }}
      >
        {children}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 4,
          borderRadius: 2,
          background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
        }}
      />
    </Box>
  )
}

const infoItems = (t) => [
  { icon: <LocationOnIcon />, label: t.about.location },
  { icon: <EmailIcon />, label: t.about.email },
  { icon: <PhoneIcon />, label: t.about.phone },
]

export default function About() {
  const { t } = useI18n()

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: 'background.paper',
        borderTop: '1px solid rgba(124,58,237,0.1)',
        borderBottom: '1px solid rgba(124,58,237,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>{t.about.sectionTitle}</SectionTitle>
        </MotionBox>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Text */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5 }}>
                {t.about.paragraph1}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5 }}>
                {t.about.paragraph2}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {t.about.paragraph3}
              </Typography>
            </MotionBox>
          </Grid>

          {/* Info card */}
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  bgcolor: 'background.default',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}
                >
                  Info
                </Typography>
                {infoItems(t).map(({ icon, label }) => (
                  <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box sx={{ color: 'primary.main', display: 'flex', flexShrink: 0 }}>{icon}</Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', wordBreak: 'break-word' }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

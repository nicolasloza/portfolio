import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { motion } from 'framer-motion'
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

function StatBox({ value, label }) {
  return (
    <Box sx={{ textAlign: 'center', flex: 1 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.1,
          mb: 0.5,
        }}
      >
        {value}
      </Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.3, display: 'block' }}>
        {label}
      </Typography>
    </Box>
  )
}

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

        <Grid container spacing={6} alignItems="center">
          {/* Text */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.8 }}>
                {t.about.paragraph1}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {t.about.paragraph2}
              </Typography>
            </MotionBox>
          </Grid>

          {/* Stats card */}
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
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <StatBox value="4+" label={t.about.statYears} />
                  <Box sx={{ width: '1px', bgcolor: 'rgba(124,58,237,0.15)' }} />
                  <StatBox value="300k+" label={t.about.statUsers} />
                </Box>
                <Box sx={{ width: '100%', height: '1px', bgcolor: 'rgba(124,58,237,0.15)', mb: 3 }} />
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <StatBox value="5" label={t.about.statDevs} />
                  <Box sx={{ width: '1px', bgcolor: 'rgba(124,58,237,0.15)' }} />
                  <StatBox value="Full Stack" label={t.about.statFullStack} />
                </Box>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

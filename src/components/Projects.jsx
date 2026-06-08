import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import { useI18n } from '../App'

const MotionBox = motion(Box)

function SectionTitle({ children }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 1 }}>
        {children}
      </Typography>
      <Box sx={{ width: 60, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }} />
    </Box>
  )
}

const GRADIENT_HEADERS = [
  'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(91,33,182,0.15))',
  'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(8,145,178,0.1))',
  'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.1))',
]

export default function Projects() {
  const { t } = useI18n()
  const { cards, sectionTitle, viewCode, viewDemo } = t.projects

  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: { xs: 8, md: 11 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>{sectionTitle}</SectionTitle>
        </MotionBox>

        <Grid container spacing={3}>
          {cards.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                sx={{ height: '100%' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(124,58,237,0.15)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(124,58,237,0.4)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(124,58,237,0.15)',
                    },
                  }}
                >
                  {/* Card header gradient */}
                  <Box
                    sx={{
                      height: 90,
                      background: GRADIENT_HEADERS[idx % GRADIENT_HEADERS.length],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <BusinessCenterIcon
                      sx={{
                        fontSize: 48,
                        color: 'rgba(255,255,255,0.15)',
                      }}
                    />
                    {project.status === 'professional' && (
                      <Chip
                        label="Professional"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          bgcolor: 'rgba(0,0,0,0.4)',
                          color: 'text.secondary',
                          fontSize: '0.68rem',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      />
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1rem' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7, flexGrow: 1 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(124,58,237,0.08)',
                            color: 'primary.light',
                            border: '1px solid rgba(124,58,237,0.2)',
                            fontSize: '0.7rem',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 2.5, pt: 0, gap: 1, display: project.status === 'professional' ? 'none' : 'flex' }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      disabled
                      sx={{
                        color: 'text.secondary',
                        '&.Mui-disabled': { color: 'rgba(255,255,255,0.2)' },
                      }}
                    >
                      {viewCode}
                    </Button>
                    <Button
                      size="small"
                      startIcon={<OpenInNewIcon />}
                      disabled
                      sx={{ '&.Mui-disabled': { color: 'rgba(255,255,255,0.2)' } }}
                    >
                      {viewDemo}
                    </Button>
                  </CardActions>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

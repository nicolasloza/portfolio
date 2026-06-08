import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'
import { motion } from 'framer-motion'
import WorkIcon from '@mui/icons-material/Work'
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

export default function Experience() {
  const { t } = useI18n()

  return (
    <Box
      component="section"
      id="experience"
      sx={{ py: { xs: 8, md: 11 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>{t.experience.sectionTitle}</SectionTitle>
        </MotionBox>

        <Timeline
          sx={{
            px: 0,
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.25,
              display: { xs: 'none', sm: 'block' },
            },
          }}
        >
          {t.experience.jobs.map((job, idx) => (
            <TimelineItem key={idx}>
              <TimelineOppositeContent
                sx={{ color: 'text.secondary', fontSize: '0.8rem', pt: 2.5, display: { xs: 'none', sm: 'block' } }}
              >
                {job.period}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: idx === 0 ? 'primary.main' : 'background.paper',
                    border: idx !== 0 ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                    boxShadow: idx === 0 ? '0 0 16px rgba(124,58,237,0.5)' : 'none',
                    p: 1,
                  }}
                >
                  <WorkIcon sx={{ fontSize: 18, color: idx === 0 ? '#fff' : 'primary.main' }} />
                </TimelineDot>
                {idx < t.experience.jobs.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: 'rgba(124,58,237,0.25)' }} />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ pb: 5, pt: 0.5 }}>
                <MotionBox
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      bgcolor: 'background.paper',
                      border: '1px solid rgba(124,58,237,0.15)',
                      borderRadius: 3,
                      '&:hover': {
                        borderColor: 'rgba(124,58,237,0.35)',
                        boxShadow: '0 4px 24px rgba(124,58,237,0.08)',
                      },
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                        {job.role}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'primary.main',
                          display: { xs: 'block', sm: 'none' },
                          fontWeight: 600,
                        }}
                      >
                        {job.period}
                      </Typography>
                    </Box>

                    <Typography
                      variant="subtitle2"
                      sx={{ color: 'secondary.main', fontWeight: 600, mb: 2 }}
                    >
                      {job.company}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2.5 }}
                    >
                      {job.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {job.stack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(124,58,237,0.1)',
                            color: 'primary.light',
                            border: '1px solid rgba(124,58,237,0.25)',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </MotionBox>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  )
}

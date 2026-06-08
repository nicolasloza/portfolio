import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useI18n } from '../App'

const TECH_SKILLS = ['React.js', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'TypeORM', 'HTML5', 'CSS3', 'PostgreSQL', 'MongoDB', 'MySQL', 'Material UI', 'Bootstrap']
const TOOLS = ['Git', 'GitHub', 'Cursor', 'Claude', 'Jira', 'Postman', 'CircleCI']
const TEXT_BODY = 'rgba(255,255,255,0.82)'
const ICON_MUTED = 'rgba(255,255,255,0.55)'

function CvSection({ title, children }) {
  return (
    <Box sx={{ mb: 3.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.5 }}>
        <Box sx={{
          width: 3, height: 16, borderRadius: 1,
          background: 'linear-gradient(180deg, #7C3AED, #06B6D4)',
          flexShrink: 0,
        }} />
        <Typography variant="overline" sx={{ color: '#9D5FF0', fontWeight: 700, letterSpacing: 2, fontSize: '0.7rem' }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ borderTop: '1px solid rgba(124,58,237,0.15)', pt: 2 }}>
        {children}
      </Box>
    </Box>
  )
}

function JobEntry({ role, company, period, description, stack }) {
  return (
    <Box sx={{
      mb: 2.5,
      pl: 2,
      borderLeft: '2px solid rgba(124,58,237,0.35)',
      '&:last-child': { mb: 0 },
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 0.5, mb: 0.2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.88rem' }}>{role}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>{period}</Typography>
      </Box>
      <Typography variant="caption" sx={{ color: '#06B6D4', fontWeight: 600, display: 'block', mb: 0.8 }}>
        {company}
      </Typography>
      <Typography variant="body2" sx={{ color: TEXT_BODY, fontSize: '0.81rem', lineHeight: 1.7, mb: stack ? 1.2 : 0 }}>
        {description}
      </Typography>
      {stack && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {stack.map((s) => (
            <Chip key={s} label={s} size="small" sx={{
              bgcolor: 'rgba(6,182,212,0.07)',
              color: 'rgba(6,182,212,0.85)',
              border: '1px solid rgba(6,182,212,0.18)',
              fontSize: '0.67rem',
              height: 20,
            }} />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default function CvModal({ open, onClose }) {
  const { t } = useI18n()
  const cv = t.cv
  const exp = t.experience
  const skills = t.skills

  const handlePrint = () => {
    const link = document.createElement('a')
    link.href = `${import.meta.env.BASE_URL}Nicolas_Loza_cv.pdf`
    link.download = 'Nicolas_Loza_cv.pdf'
    link.click()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#0e0e0e',
          border: '1px solid rgba(124,58,237,0.25)',
          borderRadius: 3,
          maxHeight: '90vh',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(124,58,237,0.12)',
          pb: 2,
          background: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, transparent 100%)',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.3px' }}>{cv.title}</Typography>
        <IconButton onClick={onClose} size="small" sx={{ color: 'text.secondary' }} className="no-print">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: { xs: 3, md: 4 }, pt: '36px !important', pb: 4 }}>
        {/* Header */}
        <Box sx={{
          mb: 3,
          pb: 3,
          borderBottom: '1px solid rgba(124,58,237,0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 2,
        }}>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{
              position: 'absolute', top: -10, left: -10,
              width: 220, height: 60,
              background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <Typography variant="h4" sx={{
              fontWeight: 800, mb: 0.4, letterSpacing: '-0.5px',
              background: 'linear-gradient(135deg, #fff 40%, #9D5FF0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Nicolás Loza Spataro
            </Typography>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                width: 6, height: 6, borderRadius: '50%', bgcolor: '#10B981',
                animation: 'blink 2s ease-in-out infinite',
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.3 },
                },
              }} />
              <Typography variant="subtitle1" sx={{
                background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}>
                Full Stack Developer
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.7, alignItems: { xs: 'flex-start', sm: 'flex-end' } }}>
            {[
              { icon: <EmailIcon sx={{ fontSize: 13 }} />, text: 'n.lozaspataro@gmail.com' },
              { icon: <PhoneIcon sx={{ fontSize: 13 }} />, text: '+54 911 5622 6313' },
              { icon: <LocationOnIcon sx={{ fontSize: 13 }} />, text: 'Buenos Aires, Argentina' },
              { icon: <LinkedInIcon sx={{ fontSize: 13, color: '#0A66C2' }} />, text: 'linkedin.com/in/nicolas-loza-spataro' },
            ].map(({ icon, text }) => (
              <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                <Box sx={{ color: ICON_MUTED }}>{icon}</Box>
                <Typography variant="caption" sx={{ color: TEXT_BODY, fontSize: '0.75rem' }}>{text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Profile */}
        <CvSection title={cv.profile}>
          <Typography variant="body2" sx={{ color: TEXT_BODY, lineHeight: 1.75, fontSize: '0.85rem' }}>
            {cv.profileText}
          </Typography>
        </CvSection>

        {/* Experience */}
        <CvSection title={cv.experience}>
          {exp.jobs.map((job, idx) => (
            <JobEntry
              key={idx}
              role={job.role}
              company={job.company}
              period={job.period}
              description={job.description}
              stack={job.stack}
            />
          ))}
        </CvSection>

        {/* Skills */}
        <CvSection title={cv.skills}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
            {TECH_SKILLS.map((s) => (
              <Chip key={s} label={s} size="small" sx={{
                bgcolor: 'rgba(124,58,237,0.1)',
                color: '#9D5FF0',
                border: '1px solid rgba(124,58,237,0.25)',
                fontSize: '0.72rem',
              }} />
            ))}
          </Box>
        </CvSection>

        {/* Tools */}
        <CvSection title={cv.tools}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
            {TOOLS.map((s) => (
              <Chip key={s} label={s} size="small" sx={{
                bgcolor: 'rgba(245,158,11,0.08)',
                color: '#FCD34D',
                border: '1px solid rgba(245,158,11,0.2)',
                fontSize: '0.72rem',
              }} />
            ))}
          </Box>
        </CvSection>

        {/* Education */}
        <CvSection title={cv.education}>
          {skills.eduItems.map((item) => (
            <Box key={item.course} sx={{
              display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 0.5,
              pl: 2, borderLeft: '2px solid rgba(124,58,237,0.35)',
            }}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.88rem' }}>{item.institution}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.81rem' }}>{item.course}</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>{item.period}</Typography>
            </Box>
          ))}
        </CvSection>
      </DialogContent>

      <DialogActions
        className="no-print"
        sx={{ px: 3, py: 2, borderTop: '1px solid rgba(124,58,237,0.12)', gap: 1 }}
      >
        <Button onClick={onClose} sx={{ color: 'text.secondary' }}>
          {cv.close}
        </Button>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handlePrint}
          sx={{
            background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
            '&:hover': { background: 'linear-gradient(135deg, #9D5FF0, #7C3AED)' },
          }}
        >
          {cv.print}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

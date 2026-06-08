import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { motion } from 'framer-motion'
import SchoolIcon from '@mui/icons-material/School'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiHtml5, SiCss, SiBootstrap, SiMui, SiTypeorm,
  SiNodedotjs,
  SiPostgresql, SiMysql,
  SiGit, SiGithub, SiJira, SiPostman, SiCircleci, SiClaude,
} from 'react-icons/si'
import { TbBrandReactNative, TbApi } from 'react-icons/tb'

function CursorLogo({ size = 26, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" fill={color} opacity="0.15" />
      <path d="M5 5L12 19L14.5 13.5L20 11L5 5Z" fill={color} />
    </svg>
  )
}
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

const ICON_SIZE = 26

const TECH_LIST = {
  frontend: [
    { name: 'React.js',     Icon: SiReact,            color: '#61DAFB' },
    { name: 'React Native', Icon: TbBrandReactNative, color: '#61DAFB' },
    { name: 'Next.js',      Icon: SiNextdotjs,        color: '#ffffff' },
    { name: 'TypeScript',   Icon: SiTypescript,       color: '#3178C6' },
    { name: 'JavaScript',   Icon: SiJavascript,       color: '#F7DF1E' },
    { name: 'HTML5',        Icon: SiHtml5,            color: '#E34F26' },
    { name: 'CSS3',         Icon: SiCss,              color: '#1572B6' },
    { name: 'Material UI',  Icon: SiMui,              color: '#007FFF' },
    { name: 'Bootstrap',    Icon: SiBootstrap,        color: '#7952B3' },
  ],
  backend: [
    { name: 'Node.js',      Icon: SiNodedotjs,        color: '#339933' },
    { name: 'TypeORM',      Icon: SiTypeorm,          color: '#E83524' },
    { name: 'REST APIs',    Icon: TbApi,              color: '#06B6D4' },
  ],
  databases: [
    { name: 'PostgreSQL',   Icon: SiPostgresql,       color: '#4169E1' },
    { name: 'MySQL',        Icon: SiMysql,            color: '#4479A1' },
  ],
  tools: [
    { name: 'Git',          Icon: SiGit,              color: '#F05032' },
    { name: 'GitHub',       Icon: SiGithub,           color: '#ffffff' },
    { name: 'Cursor',       Icon: CursorLogo,         color: '#A78BFA' },
    { name: 'Claude',       Icon: SiClaude,           color: '#D97757' },
    { name: 'Jira',         Icon: SiJira,             color: '#0052CC' },
    { name: 'Postman',      Icon: SiPostman,          color: '#FF6C37' },
    { name: 'CircleCI',     Icon: SiCircleci,         color: '#93C5FD' },
  ],
}

const CATEGORY_META = {
  frontend:  { label: 'Frontend',       accent: '#7C3AED', bg: 'rgba(124,58,237,0.07)',  border: 'rgba(124,58,237,0.2)'  },
  backend:   { label: 'Backend',        accent: '#06B6D4', bg: 'rgba(6,182,212,0.07)',   border: 'rgba(6,182,212,0.2)'   },
  databases: { label: 'Bases de datos', accent: '#10B981', bg: 'rgba(16,185,129,0.07)',  border: 'rgba(16,185,129,0.2)'  },
  tools:     { label: 'Herramientas',   accent: '#F59E0B', bg: 'rgba(245,158,11,0.07)',  border: 'rgba(245,158,11,0.2)'  },
}

const CARD_W = 72
const CARD_H = 80

function TechIcon({ tech }) {
  const { Icon, color, name } = tech
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.75,
        borderRadius: 2,
        bgcolor: 'background.default',
        border: '1px solid rgba(255,255,255,0.05)',
        cursor: 'default',
        transition: 'all 0.2s ease',
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        '&:hover': {
          borderColor: `${color}55`,
          transform: 'translateY(-3px)',
          boxShadow: `0 6px 20px ${color}22`,
        },
      }}
    >
      <Box sx={{
        width: ICON_SIZE, height: ICON_SIZE,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color, flexShrink: 0,
      }}>
        <Icon size={ICON_SIZE} />
      </Box>
      <Typography variant="caption" sx={{
        color: 'text.secondary', fontSize: '0.62rem',
        textAlign: 'center', lineHeight: 1.2,
        width: CARD_W - 8,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {name}
      </Typography>
    </Box>
  )
}

function CategoryCard({ categoryKey, delay }) {
  const meta = CATEGORY_META[categoryKey]
  const items = TECH_LIST[categoryKey]

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
      sx={{ height: '100%' }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          bgcolor: 'background.paper',
          border: `1px solid ${meta.border}`,
          borderRadius: 3,
          transition: 'border-color 0.25s',
          '&:hover': { borderColor: meta.accent + '55' },
        }}
      >
        <Typography variant="overline" sx={{
          color: meta.accent, fontWeight: 700, letterSpacing: 2,
          mb: 2.5, display: 'block', fontSize: '0.7rem',
        }}>
          {meta.label}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {items.map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </Box>
      </Paper>
    </MotionBox>
  )
}

export default function Skills() {
  const { t } = useI18n()
  const s = t.skills

  return (
    <Box
      component="section"
      id="skills"
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
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>{s.sectionTitle}</SectionTitle>
        </MotionBox>

        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12}>
            <CategoryCard categoryKey="frontend" delay={0} />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <CategoryCard categoryKey="backend" delay={0.1} />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <CategoryCard categoryKey="databases" delay={0.15} />
          </Grid>
          <Grid item xs={12}>
            <CategoryCard categoryKey="tools" delay={0.2} />
          </Grid>
        </Grid>

        {/* Education */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{ mt: 4 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: 'background.default',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <SchoolIcon sx={{ color: 'secondary.main', fontSize: 32, flexShrink: 0 }} />
            <Box>
              <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2, display: 'block' }}>
                {s.education}
              </Typography>
              {s.eduItems.map((item) => (
                <Box key={item.course} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{item.institution}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.course}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{item.period}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  )
}

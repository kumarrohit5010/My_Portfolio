import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const defaultSkills = [
  { name: 'HTML', icon: 'fa-brands fa-html5', value: 90 },
  { name: 'CSS', icon: 'fa-brands fa-css3-alt', value: 80 },
  { name: 'JavaScript', icon: 'fa-brands fa-js', value: 75 },
  { name: 'MySQL', icon: 'fa-solid fa-database', value: 80 },  { name: 'C', icon: 'fa-solid fa-code', value: 85 },
  { name: 'C++', icon: 'fa-solid fa-code', value: 90 },
  { name: 'Python', icon: 'fa-brands fa-python', value: 40 },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', value: 90 },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github', value: 60 },
  { name: 'Data Structures and Algorithms (DSA)', icon: 'fa-solid fa-brain', value: 65 },
];

function SkillProgress({ name, icon, value }) {
  const progressId = React.useId();

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography id={progressId} variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
          <i className={icon} style={{ color: '#0ef', marginRight: '10px' }} aria-hidden="true" />
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#0ef', fontWeight: 700 }}>
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        aria-labelledby={progressId}
        sx={{
          height: 4,
          borderRadius: 999,
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 999,
            background: 'linear-gradient(90deg, #0ef 0%, #4dd0ff 100%)',
          
          },
        }}
      />
    </Box>
  );
}

export default function LinearProgressSection({ skills = defaultSkills, title = 'Technical Skills' }) {
  const [progressValues, setProgressValues] = React.useState(skills.map(() => 0));

  React.useEffect(() => {
    setProgressValues(skills.map(() => 0));

    const interval = window.setInterval(() => {
      setProgressValues((currentValues) => {
        let hasUpdated = false;

        const nextValues = currentValues.map((currentValue, index) => {
          const targetValue = skills[index].value;
          if (currentValue >= targetValue) {
            return targetValue;
          }

          hasUpdated = true;
          return Math.min(currentValue + 1, targetValue);
        });

        if (!hasUpdated) {
          window.clearInterval(interval);
        }

        return nextValues;
      });
    }, 20);

    return () => window.clearInterval(interval);
  }, [skills]);

  return (
    <Box
      sx={{
        p: 5,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        border: '1px solid rgba(0, 238, 255, 0.18)',
        boxShadow: '0 0 30px rgba(0, 238, 255, 0.08)',
      }}
    >
      <h3 className="mt-0 mb-4" style={{ color: 'white' }}>
        {title}
      </h3>
      {skills.map((skill, index) => (
        <SkillProgress
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          value={progressValues[index]}
        />
      ))}
    </Box>
  );
}
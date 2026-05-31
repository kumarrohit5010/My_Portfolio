import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const defaultSkills = [
  { name: 'MongoDB', icon: 'fa-solid fa-leaf', value: 80 },
  { name: 'Express.js', icon: 'fa-solid fa-server', value: 70 },
  { name: 'React.js', icon: 'fa-brands fa-react', value: 65 },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', value: 76 },
];

function CircularProgressWithLabel({ name, icon, value }) {
  const progressId = React.useId();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={value}
          aria-labelledby={progressId}
          size={70}
          thickness={2}
          sx={{ color: '#0ef' }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i className={icon} style={{ color: '#0ef', fontSize: '1.1rem' }} aria-hidden="true" />
          <Typography variant="caption" component="div" sx={{ color: '#fff', fontWeight: 700 }}>
            {`${value}%`}
          </Typography>
        </Box>
      </Box>
      <Typography id={progressId} variant="body1" sx={{ color: '#fff', fontWeight: 700 }}>
        {name}
      </Typography>
    </Box>
  );
}

export default function CircularProgressSection({ skills = defaultSkills, title = 'MERN Stack' }) {
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
        p: 4,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.06)'
        ,
        border: '1px solid rgba(0, 238, 255, 0.18)',
        boxShadow: '0 0 30px rgba(0, 238, 255, 0.08)',
      }}
    >
      <h3 className="mt-0 mb-4" style={{ color: 'white' }}>
        {title}
      </h3>
      <div className="row g-4 justify-content-center">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-6 col-lg-6" key={skill.name}>
            <CircularProgressWithLabel
              name={skill.name}
              icon={skill.icon}
              value={progressValues[index]}
            />
          </div>
        ))}
      </div>
    </Box>
  );
}

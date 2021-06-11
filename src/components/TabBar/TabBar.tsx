import { useState } from 'react';
import { AppBar } from '@material-ui/core';
import { Tabs, Tab, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import useScrollDirection from '../../hooks/useScrollDirection';

const useStyles = makeStyles((theme) => ({
  tabBar: {
    willChange: 'transform',
    transform: 'translateY(0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short,
    }),
    top: 72,
    backgroundColor: theme.palette.primary.contrastText,
  },
  tabBarScrolled: {
    transform: 'translateY(-72px)',
  },
  tabs: {
    maxWidth: 1330,
    width: '100%',
    margin: 'auto',
  },
}));

export default function TabBar({
  onTabChange = (value: 'active' | 'completed') => {},
}) {
  const scrollDirection = useScrollDirection();
  const classes = useStyles();
  const [value, setValue] = useState<'active' | 'completed'>('active');

  const handleChange = (event: any, newValue: 'active' | 'completed') => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(
        classes.tabBar,
        scrollDirection === 'down' && classes.tabBarScrolled
      )}
    >
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab value="active" label="active" wrapped />
        <Tab value="completed" label="completed" />
      </Tabs>
    </AppBar>
  );
}

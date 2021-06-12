import { Fab, makeStyles, SvgIconTypeMap } from '@material-ui/core';
import { memo, MouseEventHandler, useEffect, useState } from 'react';
import clsx from 'clsx';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

const useStyles = makeStyles((theme) => ({
  fabContainer: {
    position: 'fixed',
    right: 16,
    bottom: 16,
  },
  fab: {
    willChange: 'transform',
    transform: 'translateX(0);',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short,
    }),
    boxShadow: 'none',
  },
  collapsedFab: {
    transform: 'translateX(calc(100% - 48px));',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      marginRight: theme.spacing(1),
      willChange: 'transform',
      transform: 'translateX(0);',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.short,
      }),
    },
  },
  collapsedFabIcon: {
    '& > *': {
      transform: `translateX(-${theme.spacing(0.5)}px);`,
    },
  },
  fabLabel: {
    opacity: 1,
    willChange: 'opacity',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  collapsedFabLabel: {
    opacity: 0,
  },
  fabIdle: {
    transition: theme.transitions.create('filter', {
      duration: theme.transitions.duration.short,
    }),
    filter:
      'drop-shadow(0 5.5px 3px rgba(0, 0, 0, 26%)) drop-shadow(0 0 4px rgba(0, 0, 0, 8%))',
  },
  fabActive: {
    transition: theme.transitions.create('filter', {
      duration: theme.transitions.duration.short,
    }),
    filter:
      'drop-shadow(0 11px 6px rgba(0, 0, 0, 26%)) drop-shadow(0 0 8px rgba(0, 0, 0, 8%))',
  },
  fabRaised: {
    transform: 'translateY(-42px)',
  },
}));

export default memo(function ExtendedFab({
  label,
  icon,
  extended,
  raised,
  onClick,
}: {
  label: string;
  icon: any;
  extended?: boolean;
  raised?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={clsx(classes.fabContainer, raised && classes.fabRaised)}>
      <div
        className={clsx(isActive ? classes.fabActive : classes.fabIdle)}
        style={{
          overflow: 'hidden',
          borderRadius: 24,
        }}
      >
        <Fab
          variant="extended"
          color="secondary"
          className={clsx(classes.fab, !extended && classes.collapsedFab)}
          onPointerDown={() => {
            setIsActive(true);
          }}
          onPointerUp={() => {
            setIsActive(false);
          }}
          onPointerLeave={() => {
            document.addEventListener(
              'pointerup',
              () => {
                setIsActive(false);
              },
              { once: true, passive: true }
            );
          }}
          onClick={onClick}
        >
          <span
            className={clsx(
              classes.icon,
              !extended && classes.collapsedFabIcon
            )}
          >
            {icon}
          </span>
          <span
            className={clsx(
              classes.fabLabel,
              !extended && classes.collapsedFabLabel
            )}
          >
            {label}
          </span>
        </Fab>
      </div>
    </div>
  );
});

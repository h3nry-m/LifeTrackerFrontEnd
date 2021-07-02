import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { borderColor } from '@material-ui/system'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderColor: "grey.500"
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard( {title, number} ) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {number}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
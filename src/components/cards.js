import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-content">
      {['A', 'B', 'C'].map((el, i) => (
        <Card className="my-10">
          <CardContent>
            <Typography className="" color="textSecondary" gutterBottom>
              Card {el}
            </Typography>
            <Typography variant="h5" component="h2">
              Some text
            </Typography>
            <Typography className="" color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

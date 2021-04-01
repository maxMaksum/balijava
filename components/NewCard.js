import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from 'next/image'



export default function ImgMediaCard({title, subtitle, url, text}) {
 

  return (
  
        <Box display="flex" justifyContent="center" m={1} p={1}>
         
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            
            alt="Contemplative Reptile"

            image={url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
            {subtitle}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
            {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Box>
  
  );
}

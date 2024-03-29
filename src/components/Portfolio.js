import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, CardMedia, Typography, Grid, Container } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.light,
    },
    card: {
        maxWidth: 250,
        margin: 0,
    },
    media: {
        height: 160,
    },
}));


export default function Portfolio(props) {
    const classes = useStyles();

    if (props.data) {
        var projects = props.data.workprojects.map(function (projects) {
            var projectImage = 'images/portfolio/' + projects.image;

            return (
                <div key={projects.title} className="columns portfolio-item">
                <Card className={classes.card}>
                    <CardActionArea href={projects.alturl}>
                        <CardMedia className={classes.media} image={projectImage} title={projects.title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{projects.title}</Typography>
                            <Typography variant="body2" gutterBottom>{projects.category}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
            )
        })

        var hobbies = props.data.hobbyprojects.map(function (hobbies) {
            var hobbyImage = 'images/hobbies/' + hobbies.image;
            
            return (
                <div key={hobbies.title} className="columns portfolio-item">
                <Card className={classes.card}>
                    <CardActionArea href={hobbies.alturl}>
                        <CardMedia className={classes.media} image={hobbyImage} title={hobbies.title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{hobbies.title}</Typography>
                            <Typography variant="body2" gutterBottom>{hobbies.category}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
            )
        })
    }

    return (
        <section className={classes.root} id="portfolio">
            <Container className="row">
            <h1>Check Out Some of My Work</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {projects}
                    </div>
            <h1>Check Out Some of My Hobbies</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {hobbies}
                </div>
            </Container>   
    </section>
    );
}


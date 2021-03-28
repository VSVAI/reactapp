import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Loader from "react-loader-spinner";
import html2canvas from 'html2canvas';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Fetch = require('node-fetch');

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();

    return ( < Card className = { classes.root }
        variant = "outlined" >
        <
        CardContent >
        <
        div id = "output" > < /div> <
        Typography className = { classes.title }
        color = "textSecondary"
        gutterBottom >
        Word of the Day <
        /Typography> <
        Typography variant = "h5"
        component = "h2" >
        vsvai < /
        Typography > <
        Typography className = { classes.pos }
        color = "textSecondary" >
        adjective <
        /Typography> <
        Typography variant = "body2"
        component = "p" >
        well meaning and kindly. <
        br / > { '"a benevolent smile"' } <
        /Typography>< br / > <
        div id = "id"
        className = "block" >
        <
        div id = "display_id"
        className = "box" > < /div>< br / >
        <
        /div >  < /
        CardContent > <
        /Card>
    );
}


let url = "https://jsonplaceholder.typicode.com/posts";
let settings = { method: "Get" };
let data = Fetch(url, settings)
    .then(res => res.json())
    .then((json) => {


        return json;
    })

.catch(error => { console.log("server is down") });
let display_id = "";
let display_title = "";
let display_body = "";

const response = () => {

    data.then((a) => {
        data = a;
        var line2 = '';

        for (var i in data) {

            console.log(i);
            console.log("------");
            console.log(data[i].id);

            display_id = data[i].id;
            console.log("------");
            console.log(data[i].title);

            display_title = data[i].title;
            console.log("------");

            console.log(data[i].body);

            display_body = data[i].body;


            console.log("_______________________");
            try {
                document.getElementById("display_id").innerHTML += '<Card> <Typography><h3> ' + display_id + ' <br></h3> <h2> ' + display_title + ' <br> </h2><code>' + display_body + '<br></code > ' + ' </Typography></Card > ';
                document.getElementById("display_id").innerHTML += '<button id="download"><a>download </a></button>  <button id="record"><a>record </a></button>';
                //document.getElementById("display_title").innerHTML += "display_title";
                //document.getElementById("display_body").innerHTML += "display_body";
            } catch (err) {
                console.log("ok");
            }
            line2 = (lines());
            document.getElementById("id").innerHTML += line2;
        }

        return data;
    });

}

function lines() {
    return ( < Card variant = 'outlined' > < CardContent > < Typography color = 'textSecondary'
        gutterBottom >
        <
        /Typography> <
        Typography variant = "h5"
        component = "h2" >
        <
        div id = "display_id" > < /div>< /
        Typography > <
        Typography color = "textSecondary" >
        <
        div id = "display_title" > < /div> < /
        Typography > <
        Typography variant = "body2"
        component = "p" >
        <
        div id = "display_body" > < /div> < /
        Typography > < /
        CardContent > <
        CardActions >
        <
        Button size = "small" > Learn More < /Button> < /
        CardActions > <
        /Card>
    );
}

console.log(response());
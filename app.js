const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(  __dirname, "/templates/views" ))
app.use( express.static( path.join(  __dirname, "/public" )) );

hbs.registerPartials( path.join(  __dirname, "/templates/partials" ));

app.get("/", (req, res)=>{
    res.render('index', {
        title: "index",
        content: "something",
        name: "Neelam"
    });
});
app.get("/help", (req, res)=>{
    res.render('help',{
        title: "help",
        content: "help me",
        name: "Neelam"
    });
});
app.get("/about", (req, res)=>{
    res.render('about', {
        title: "about",
        content: "talk about me",
        name: "Neelam"
    });
});
app.get("/weather", (req, res)=>{
    res.send({
        forecast: "forecast",
        location: "location",
        name: "Neelam"
    });
});
app.get('/help/*', (req, res)=>{
    res.render('help404', {
        title: "404 Error",
        content: "Help article not found",
        name: "Neelam"
    });
});
app.get('/*', (req, res)=>{
    res.render('page404', {
        title: "404",
        content: "Page not found",
        name: "Neelam"
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
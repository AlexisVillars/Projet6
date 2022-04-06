/* Import des modules necessaires */
const express = require('express');
const userRoutes = require("./routes/User");
const sauceRoutes = require("./routes/sauce");

/* Initialisation de l'API */
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* Mise en place reponses headers */
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

/* Securite en tete */
const helmet = require("helmet");

app.use(helmet());

/* RateLimit */
const rateLimit = require("express-rate-limit");

app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message:
            "Vous avez effectué plus de 100 requêtes dans une limite de 15 minutes!",
        headers: true,
    })
);

/* Mise en place du routage */
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
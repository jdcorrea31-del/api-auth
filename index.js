console.log("mi primera app en express.js");
require("dotenv").config();
const express= require ("express");
const { corsMiddleware } = require("./shared/middleware/cors");
const { testConnection } = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(corsMiddleware);
const initializeDatabase = async () =>{
    await testConnection();
};

app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});

app.use("/api/v1", require("./routes/auth"));

const starServer = async () => {
    try {
        initializeDatabase()
        app.listen(PORT, () => {
            console.log(`servidor en http://localhost:${PORT}`);

        });
    } catch (error) {
        console.error("error al iniciar el servidor ", error);

    }

};
starServer();
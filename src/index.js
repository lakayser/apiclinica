import app from "./app";
import './database'

// var PORT = process.env.PORT || 8000;

app.set('port', process.env.PORT || 8080);
// app.listen(PORT);
// console.log('Server on port ', PORT);
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto ', app.get('port'), ' :)');
});
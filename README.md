# Mediyoga
Aplicación de una escuela de yoga el backend esta hecho con graphql y apollo-server  <br>
[https://github.com/israel-campos-ruiz/netflix-clone-react](https://github.com/israel-campos-ruiz/netflix-clone-react)


## Paquetes y librerias utilizados 
- [node](https://nodejs.org/es/)
- [apollo/server](https://www.apollographql.com/docs/apollo-server/)
- [graphql](https://www.npmjs.com/package/graphql)
- [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime)Se usa para evitar problemas en la compilación de babel
- [node-mailer](https://nodemailer.com/about/) Se usó para el cambio de contraseña (Backend)
- [twilio](https://www.twilio.com/docs) Se usó para notificar al usuario via sms cuando se da de alta en alguna clase (Backend)
- [graphql/tools](https://www.npmjs.com/package/graphql-tools)Se usó para separar los resolvers y schemas
- [bcrypt](https://www.npmjs.com/package/bcrypt) Se usó para encriptar las credenciales del usuario
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) Se usó para saber que usuario esta autenticado
- [mongoose](https://www.npmjs.com/package/mongoose) Se usó para facilitar las consultas a la base de datos
- [mongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_mexico_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986519&gclid=Cj0KCQiAmL-ABhDFARIsAKywVaf8BEf1ADo3-rmZGevUlZIzxEnY-uotfCURFBTClchSUtFtFFGOgkAaAnKbEALw_wcB)
Se usó para la persistencia de datos.
- [babel](https://babeljs.io/docs/en/) Se usó para escribir codigo moderno en el servidor
## Instalación 
Comando para instalar las dependencias necesarias:
```javascript
npm install
```

## Correr la aplicación en desarrollo:
```javascript
npm run dev 
```


## Construir la aplicación para producción:
```javascript
npm run build
```

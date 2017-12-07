# react-auth
React app auth (with express and mongodb).

```
mkdir congif
cd config
touch index.json
```

then in config.json 

```
{
  "dbUri": "mongodb://<your mongodb>",
  "jwtSecret": "secret phrase"
}
```

finally

```
npm install
npm start
```

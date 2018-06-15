"# forviz" 
start with (After Clone Project && must have npm)
```
npm install
```
After that create your database and import property_data.sql.zip to your database
then create .env file at root of project

Example .env file
```
DB_HOST=localhost
DB_USER=root
DB_PASS=''
DB_DATABASE=forviz 
```

then run with command node app.js 
the api will display in path localhost:8080/search?  Followed by search parameter and combind with '&'
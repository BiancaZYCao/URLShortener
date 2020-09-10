# URL Shortener 
This assignment is to implement an API which allows users to generate shorter URLs.  </br>
It provides similar backend functions like [TinyURL](https://tinyurl.com).
</br>
## How it Works
User can create an alias for his URL. </br>
For example, URL "https://sg.yahoo.com/?p=us" is map to alias "yahoo".  </br>
Thus when user access "http://localhost:3000/yahoo", it will be redirected to"https://sg.yahoo.com/?p=us".</br>
### Get Started!
```
npm install
npm install -D nodemon
npm run dev
```

### Endpoints
This API has following endpoints: 
1. POST / </br>
  It accepts body with attribute `orginalURL` and `alias`. </br>
  If the alias __already exists__ in MongoDB, it will return status code `409 Conflict`.</br>
  Otherwise, it will save the body in database.
2. GET /:alias </br>
  It will find the matching record in MongoDB, and __redirect__ to the `originalURL`.</br>

Test cases can be found in [doc/test.http](https://github.com/BiancaZYCao/URLShortener/blob/master/doc/test.http)</br>

## Other Requirements
- mongoDB </br>
  DBConnection setting can be found in file [.env](https://github.com/BiancaZYCao/URLShortener/blob/master/.env)

###  dependencies
- dotenv
- [express](https://expressjs.com)
- [mongoose](https://mongoosejs.com)
- [nodemon](https://nodemon.io)





# Express-Book-Shoppe

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://adamrobson.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adamrayrobson)

This is a backend application built with [Express](https://expressjs.com/) and [Postgres](https://www.postgresql.org/).

## Table of Contents

- [Express-Book-Shoppe](#express-book-shoppe)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Features](#features)
  - [Run Locally](#run-locally)
  - [Routes](#routes)
  - [Technologies Used](#technologies-used)
  - [Authors](#authors)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)

## General Information

This project was built as part of my time in the July 2022 cohort at Alchemy Code Lab in Portland, Oregon.

## Features

This backend application uses Express to create a server and Postgres to create a database. It includes the functionality to Create Read Update and Delete books from the database.

## Run Locally

| Command                | Description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | Starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | Runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | Runs the tests once                                                                 |
| `npm run test:watch`   | Continually watches and runs the tests when files are updated                       |
| `npm run setup-db`     | Sets up the database locally                                                        |
| `npm run setup-heroku` | Sets up the database on Heroku                                                      |

## Routes

- `/books` `GET` Gets a list of books
- `/books/:id` `PUT` Gets a particular book
- `/authors` `GET` Gets a list of authors
- `/authors/:id` `DELETE` Gets a particular author

## Technologies Used

- JavaScript
- Express
- Babel
- Node
- Postgres
- Postman
- Jest
- Nodemon
- ESLint
- Prettier
- GitHub Actions

## Authors

> [@Adam-Robson](https://www.github.com/Adam-Robson)

## Acknowledgements

Thanks to Alchemy Code Lab and instructor [Julie Nisbet](https://www.github.com/julienisbet), who created the template for the project and was crucial in debugging along the way!

## Contact

Feel free to reach out! I can be messaged through LinkedIn by clicking on the badge above or by emailing me at adamray312@gmail.com.

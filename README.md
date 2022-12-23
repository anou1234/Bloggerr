# Bloggerr
A blogging website using MongoDB as backend made with HTML , CSS, JS , and NodeJS.

### The website contains 2 pages:

1. Home page (home.hbs)

2. Editor's Section (Writeup.hbs)

## File Structure

1. The public folder contains the image , css , fonts , js , json files and the connection folder (containing connectdb.js file) to connect the database to the website.

2. The Template folder contains 2 folders:

    1 . Partials : Contains Header and Footer hbs files to add/connect them in different pages of the website.
    
    2 . Views : Contains Home.hbs and writeup.hbs (webpages).

3. node_modules folder, package-lock,package file : to connect nodejs in the website.

4. src folder - contains index.js file, contains code to run the website w=using nodejs and connect the database follwed by creating the schema for it.



## Setting up NodeJS for the website

Download and extract; then open the project folder in the code editor of your choice (VSCode ,etc.).

Replace the URI of your MongoDB database with that in the connectdb.js file in the connection folder.

If you already have [NodeJS](https://nodejs.org/en/download/) installed on your device, run the following commands in the terminal of your code editor:

```bash
npm init

npm i express

npm i nodemon

npm i mongoose

node src/index
```
## Running the Website

1. On your web browser, type "localhost:3000/home" to open the homepage.

2. Click on the "POST YOUR BLOG" button to access the Editor's section page.

3. On adding the data into the textboxes on this page, data will be directly added to the newly created Collection/Schema of your database.

4. Alternatively, type "localhost:3000/writeup" in your browser to access the editor's section page.

Click on the "Home" button in the navbar to access the homepage.


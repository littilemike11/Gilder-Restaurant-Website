# Gilder-Restaurant-Website

A full stack website for the restaurant at gilder. https://the-restaurant-at-gilder.netlify.app/

## MVPs

My initial goals for website

1. Showcase menu items with pictures
2. Utilize google translate for tourists
3. Have an admin page to allow staff to add, update or delete menu items.

## Tech Stack

### Frontend

- React
- Tailwindcss
- DaisyUI
- Netlify (host)
- Axios

### Backend

- MondoDB (database for menu items)
- Express.js (api)
- Cloudinary (image storage)
- Heroku (server)

## Website Features

- Google translate widget
- Menu tabs
- Hours of Operation + location using google maps embed
- Press articles about restaurant

## Pages

### /

Base website or landing page that is open to public. Shows the basic information about the restaurant as described above

### /admin

User prompted with login for username & password. If correct credentials are given, the user is shown a table of all menu items. User can add, update or delete menu items, including uploading images. These changes will be reflected on the home page.

### /test

This page serves as a mimic to the admin page but for public use. No login info is required. The user is shown a table of all menu items. User can add, update or delete menu items, including uploading images. _However_ these changes will **NOT** be reflected on the home page, and are only reflected on the test page. But just to show general public what admin page would like and how it would work.

## Challenges

- Deploying backend server on heroku. I have a mono repo setup so I had to point heroku to that folder using heroku CLI. Heroku did have a way to link to repository directly, similar to netlify on frontend.
- Setting up image storage with cloudinary.
- Polishing user experience using typography methods

## Alternative Approaches

Perhaps using django backed for its built it admin page. Unsure how easy it would be to edit the ui for the admin page.

## Possible Additional Features

- Food tagging system for allergies or accommodations like vegan, vegetarian, dairy-free, gluten-free, spicy, kosher, halal. Makes it more abstract and allows different restaurants to create and manage their own tags. Would require its own table and the menu items table would need to reflect the changes from tags. I feel it would be easier to set up with relational database rather than mongodb
- Ability to add articles in press section

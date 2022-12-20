# Welcome to Pet Roulette!

This project uses [React](https://github.com/facebook/create-react-app), [JavaScript](https://www.javascript.com/), [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/css/), [GitHub Pages](https://pages.github.com/), and [Petfinder API](https://www.petfinder.com/developers/).
Site images are original, digital creations.

## Page 1

In the homepage, there are multiple key elements:

### Instructions

"Welcome to Pet Roulette!
Adopt a pet among 36 available in the local vicinity.
Good luck hitting the jackpot!"

1. Enter a valid zip code into the input field.
2. Press the "Enter" key or click on the search button (magnifying glass icon).
3. View and scroll among 36 pets available at adoption organizations in the local vicinity.
4. Click on a pet to redirect to the adoption post of the hosting organization.
5. (Optional) Initiate the adoption process and make a furry friend!

**Note: A user is not required to find and adopt a pet!**

### Logo Icon

Original favicon used as the tab icon, and as an entertaining spinning object.
The name of Pet Roulette's mascot is Petr.

### FlexBox
Holds an input field and search button.
Requests input of a zip code from user to send as a part of the API request.

## Page 2

The secondary page consists of API communication and a grid element:

### API Communication

Dispatch an initial request to Petfinder API (RESTful API) to retrieve an access token for subsequent API calls in cURL format.
Send a secondary request to Petfinder API regarding information (names and images) of animals near the user inputted zip code.

### Grid

Implemented a grid system to layout items that displays names and images of 36 pets.
Grid layout and information is depicted/adjusted differently depending on the user's device.
**For PC: Organize 3 columns of pet information that the user can scroll down.**
**For mobile: Organize 1 column of pet information that the user can scroll down.**

### Appreciation

Thank you for checking out Pet Roulette, a front-end project developed by Kyle Jung and Emily Pham!

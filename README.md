# Welcome to Pet Roulette!

This project uses [React](https://github.com/facebook/create-react-app), [JavaScript](https://www.javascript.com/), [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/css/), [GitHub Pages](https://pages.github.com/), [Material-UI](https://mui.com/), and [Petfinder API](https://www.petfinder.com/developers/).

Site images are original, digital creations.

## Part 1

In the homepage, there are multiple key elements:

### Instructions

"Welcome to Pet Roulette!

Adopt a pet among 36 available in the local vicinity.

Good luck hitting the jackpawt!"

1. Enter a valid 5-digit zip code into the input field.

2. Press the "Enter" key or click on the search button (magnifying glass icon).

3. View and scroll among 36 pets available at adoption organizations in the local vicinity.

4. Click on a pet to redirect to the adoption post of the hosting organization.

5. (Optional) Initiate the adoption process and make a furry friend!

**Note: A user is not required to find and adopt a pet!**

![petrLogo](https://github.com/Pet-Roulette/pet-roulette.github.io/blob/main/public/petrLogo.png)

### Logo Icon

The name of Pet Roulette's mascot is Petr (!lame), which roots from Pet and the R from Roulette.

Original favicon used as the tab icon and as an entertaining spinning object on our pixel roulette.

### FlexBox

Holds an input field and search button.

Requests input of a zip code from user to send as a part of the API request.

### MUI Transitions

Slide the contents of the homepage into the center during render.

Slide the contents of the homepage out of the page on search button click.

Re-slide the contents of the homepage on a nonexistent zip code.

Zoom each animal into the page on a timed basis.

## Part 2

The secondary page consists of API communication and a grid element:

### API Communication

Dispatch an initial request to Petfinder API (RESTful API) to retrieve an access token for subsequent API calls in cURL format.

Send a secondary request to Petfinder API regarding information of animals near the user inputted zip code.

We specifically isolate the name, city, state, type, gender, unknown, mixed, primary, secondary, age, and image from the JSON response.

### Error Handling

Website application handles one primary case where a non-existent zip code is sent in the API request.

Pet Roulette secures a secondary case where the API response provides an empty array of photos.

### Grid

Implemented a grid system to layout items that displays names and images of 36 pets.

Grid layout and information is depicted/adjusted differently depending on the user's device.

**For PC: Organize 3 columns of pet information that the user can scroll down.**

**For mobile: Organize 1 column of pet information that the user can scroll down.**

### Appreciation

Thank you for checking out Pet Roulette, a front-end project developed by Kyle Jung and Emily Pham!

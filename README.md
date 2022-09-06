<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/CaidynGinger/EcommerceStore)
![GitHub watchers](https://img.shields.io/github/watchers/CaidynGinger/EcommerceStore)
![GitHub language count](https://img.shields.io/github/languages/count/CaidynGinger/EcommerceStore)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/CaidynGinger/EcommerceStore)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Caidyn Ginger</h5>
<h5 align="center" style="padding:0;margin:0;">21100204</h5>
<h6 align="center">DV200 - Term 3 | 2022</h6>
</br>
<p align="center">
  
  <h3 align="center">Ginger Industries</h3>

  <p align="center">
    A full Mern Stack ecommerce project.
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/CaidynGinger/EcommerceStore/issues">Report Bug</a>
    ·
    <a href="https://github.com/CaidynGinger/EcommerceStore/issues">Request Feature</a>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](https://github.com/CaidynGinger/EcommerceStore/blob/main/mockups/Frame%201.png)

### Project Description

This project was a tough full-scale project keeping up with what is required and also understanding the scall of products and how login works. Moving forward I will have a greater appreciation for the services such as login or product or inventory management  

### Built With

* [React](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Nodejs](https://nodejs.org/en/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/CaidynGinger/SatelliteVision.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/CaidynGinger/SatelliteVision.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

4. An API key is not required

5. A mongoDB .env file will need to be added to alow for you to add products 


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://github.com/CaidynGinger/EcommerceStore/blob/main/mockups/Frame%202.png)

### Primative Login

Ginger industries has a login system. it does not use JWT but attempts to try make a soficticated login. currently there is a way to show and hide compoentes baced on the user authentication level and the login button changes.

However moving forward I would imagin makeing the loged in state server side and not client side would be more secure and every like change can run a authentication to check if the user is loged in and if they have the correct rights to move to the new page 

![image3](https://github.com/CaidynGinger/EcommerceStore/blob/main/mockups/Frame%205.png)
### Feature 1

All Ships pulles details 
- The all ships page will pull all details from the server that then can be passed to the indevidule page. 

![image4](https://github.com/CaidynGinger/EcommerceStore/blob/main/mockups/Frame%204.png)
### Feature 2

Animations 

- Trying to animate React can be difficult as the dom creates and removes components and having components animate will require them to be rendered first and then animated.
- there might be a way around this issue however for now all modals like the login are rendered and are just positioned off screen then new CSS is applied to animate the modal shifting onto the screen

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilized Express for comunication between MongoDB and react front end
* Created Login system with bcrypt
* Created backend services with Node JS 

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* Finally working with full stck has opened my eye to how complex systems can be

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Working with react component architecture can be difficult to separate what the component is and what it displays should a product card know what it will receive or will it work with what its got? Building with the final look in mind can cause bad coding decisions like wrong prop values passed ETC


#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* Creating Reusable components in react.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Finish project
  - add the ability to edit products
  - add the ability to add images
  - change login to be JWT authenticated
  - add orders page
  - animate main carousel 

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image9](https://github.com/CaidynGinger/EcommerceStore/blob/main/mockups/Mockup%20main.png)
<br>
![image10](https://github.com/CaidynGinger/EcommerceStore/blob/main/mockups/Frame%201.png)
<br>
![image10](https://github.com/CaidynGinger/EcommerceStore/blob/main/mockups/Frame%204.png)

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://youtu.be/koikoEEh97c)


See the [open issues](https://github.com/CaidynGinger/EcommerceStore/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Caidyn Ginger** - [CaidynGinger](https://github.com/CaidynGinger)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Caidyn Ginger** - [21100204@virtualwindow.co.za](mailto:21100204@virtualwindow.co.za) 
* **Project Link** - https://github.com/CaidynGinger/EcommerceStore

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Products](https://robertsspaceindustries.com/pledge/ships)


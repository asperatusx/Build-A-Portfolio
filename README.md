
# Build-A-Portfolio

This project will allow any user without prior knowledge to web development to customize their own personal portfolio website. For example, the website will have a section with a list of skills that the user can modify to match their own skills.


## Built With

* [![React][React.js]][React-url]
* [Node]
* [Express]
* Javascript
* CSS3
* HTML5
## Installation

Install build-a-portfolio with npm

1. Clone the repo
   ```sh
   git clone https://github.com/asperatusx/capstone.git
   ```
2. Install NPM packages
   ```sh
   npm install sass swiper react-toastify react-modern-drawer react-icons emailjs-com axios
   ```
3. Run App
   ```sh
   npm start
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


 Enter your localhost URL in `.env`
   ```js
   REACT_API_URL = 'ENTER YOUR LOCALHOST URL';
   ``` 


## Features

- Display profile picture and resume
- Display personalized skills
- Update and display tailored projects
- Quick and easy contact methods to reach user of portfolio


## Usage/Examples

After launching the site, use the modal on the top left to access login.
![image](https://user-images.githubusercontent.com/112670330/219265071-f22aab17-f892-45e4-ad35-e7da1e1827c7.png)

Login with 
```sh
   username:andrew
   password:hello123
   ```
Or
```sh
   username:jon
   password:someword
   ```

To delete skills or projects use the remove button as a toggle. Click skills you want deleted and toggle REMOVE to update the list.
![image](https://user-images.githubusercontent.com/112670330/219265971-9d7b5e4a-1974-4d3a-a092-666e313ec022.png)

After you are done adding skills or projects, can return by clicking PERSONAL PORTFOLIO in modal

![image](https://user-images.githubusercontent.com/112670330/219266277-1112d81f-e855-45d6-acff-e992fb73824c.png)
## Lessons learned & next steps

The next steps would be making the portfolio site buildable from scatch without touching a single code for the end user. Kind of like a drag and drop puzzle. 

I have learned a lot on how to really use states to update components and pass props around. There are so many libraries available out there it can get confusing on what to use and how to use it. 
## Screenshots


![image](https://user-images.githubusercontent.com/112670330/219266993-a81e0b77-d240-46d8-a7ec-a9858cd25808.png)

## Links

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node]: https://nodejs.org/en/
[Express]: https://expressjs.com/

# GoLogic-Coding-Challenge-UI
## Description
This repository is a Angular UI prototype for a Booking Platform which a user can see list rooms, select a room to see more details and can select dates to rent or book the room. Rooms that have already been booked with the same dates or within the range of the booked dates cannot be booked by the users anymore. Booking of a room will have restriction with it's room capacity that it can accommodate guests and a user will book using an email.

## Architecture
This Angular UI is the UI or Presentation layer of Clean Architecture base project. [See here](https://github.com/JohnHugo1105/GoLogic-Coding-Challenge-API "See here")

## Stack
This is front-end stack uses **Angular version 12** framework and libraries like **Material Angular** and **Bootstrap 5**.
### Why Angular?
- It gives a lot of features out of the box.
- Uses TypeScript for strongly type, compile time safety unlike the traditionally jQuery or Vanilla Javascript that errors at most times are catched at runtime.
- Google support which is a long term support
- Follows MVC or MVVM architecural pattern.
- Component base architectural which components can be reusable.
- SPA that makes the UI more responsive compared to older web frameworks that pages have to reload evertime needs to access it.
### Why Material Angular?
- It gives a variety of its pre-built components that saves Angular developers time of builting or customizing their own components.
### Why Bootstrap 5
- It has a rich utlity classes that helps developers reused it instead of making it. It has also pre-built components.
## Trade-offs
- Having a much more enticing UI/UX experience i.e signup/signin, admin or management process, authentication, code refactoring to see a much more better way that woud be inline with standards and best practices and automated end to end testing. Had to focus more on the backend side to deliver the logical computing.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## How to Use This App

* An app open with input field and a button named add.
  You can add your todo by typing your task in input field and clicked the Add Button or just by pressing the return/enter key. (Remember adding empty input will lead to an popup alert "saying please write again")

* On successfull adding of todo, a new button will be added named clear all. (You can read its functionality in button functionality section)
  Your single todo skeleton contains - todo along with two buttons, edit and delete, just to edit and delete current todo respectively.

* If you have completed you task, you can clicked on particular todo and it will be marked as completed todo and switched to completed todo section which is   present below the pending todo section.
  You can also revert back the 'completed todo' to 'pending todo' just by clicking it again.
  Along with that you can also clear all your completed todo just by clicking on clear button in completed todo section.

* Your todo will be present in  your browser even if you do a hard refresh or even close your browser.

## Button functionality

* Add Button:

  Clicked thid button to add your new task as todo after writing your task in input field.
  You can also do this by pressing the enyter/return key


* Clear All Button:

  Clicked this button to clear your all todo (from pending todo as well as fron completed todo)
  Causion: There is no way to get back your task if you hit this button.


* Edit Button:

  To edit your pending task just clicked this edit button and you can easliy edit you todo by updating it into input field and then clicked add button to add     this updated task.


* Del Button:

  To Delete your Pending todo, you can clicked this edit button and particular task will be deleted as soon as you clicked this.


* Clear Button:

  This button is used to delete the all completed task in your todo app. So you can clicked this button to delete completed todo.


## Edge Cases

1 . If user wants to add empty task (null) then in that case it will popup an aler with message please write again without adding the blank (null) todo.
 
2. If user enter too long task as todo then it will automatically added to next line just to maintain UI flow and helps in imroving readability to end user.
 
 3. There is no loss in users data (todos) if user refresh the todo app or if close the browser window or complete browser.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

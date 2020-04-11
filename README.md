# Shabi CLI

A React CLI to make your life easier.

Using the CLI to create a class/hook/form - creates it in the folder you're in.

Using the CLI to create pages should be done from your main directory (where package.json is located)

Soon all the functionalities will improve and you'll be able to create a component from your main directory (where package.json is located)

## Installation

Using [npm](https://www.npmjs.com/):

    npm i -g shabi-cli

## CLI Arguments

- First Argument - `shabi` - [default]
- Second Argument - `class` | `hook` | `service` - What you're trying to generate!
- Third Argument - `HelloWorld` | `Task` | `Note` - Name
- Fourth Argument - `--extra` | `-E` - Add Extras to the content you're generating!

## Options

```javascript
shabi class HelloWorld
shabi class Projects --extra
shabi hook Task
shabi hook Note -E
shabi form-class CreateIdea --extra
shabi form-hook CreateLight --extra
shabi page-class login
shabi page-hook register -E
shabi service NoteValidation (not implemented yet)
```

| Commands    |       Functionality        |
| ----------- | :------------------------: |
| class       |       Create a class       |
| hook        |       Create a hook        |
| form-class  | Create a class with a form |
| form-hook   | Create a hook with a form  |
| page-class  |   Create a page (class)    |
| page-hook   |    Create a page (hook)    |
| ~~service~~ |    ~~Create a service~~    |

## Options Usage

### class

`ex. shabi class HelloWorld`

```react
import "./styles/HelloWorld.scss";

import React, {Component} from "react";

class HelloWorld extends Component {
    render(){
        return (
            <div className="HelloWorld">

            </div>
        );
    }
}

export default HelloWorld;
```

### hook

`ex. shabi hook HelloWorld`

```react
import "./styles/HelloWorld.scss";

import React from "react";

const HelloWorld = () => {
    return (
        <div className="HelloWorld">

        </div>
    );
}

export default HelloWorld;
```

## Main React Folder Structure

```
    src/
        assets/
        components/
        containers/
        pages/
        services/
        store/
            API/
            actions/
            reducers/
        App.js
        index.js
    package.json
```

## Components Structure

```
    components/
        notes/
            resources/
                CreateNote.js
                DeleteNote.js
                EditNote.js
                ListNotes.js
                ShowNote.js
            Notes.js
            _Header.js
            _Note.js

        projects/
            resources/
                CreateProject.js
                DeleteProject.js
                EditProject.js
                ListProject.js
                ShowProject.js
            Projects.js
            _Header.js
            _Project.js

```

## Containers Structure

```
    containers/
        AuthWrapper.container.js
        Navbar.container.js
```

## Pages Structure

```
    pages/
        auth/
            Login.page.js
            Register.page.js
            ForgotPassword.page.js
        Home.page.js
```

## Services Structure

```
    services/
        validation.service.js
        sortById.service.js
```

## Redux Structure

```
    store/
        API/
            axios/
                axiosRequest.js
                axiosWrapper.js
                dispatcher.js
            tasks/
                tasks.API.js  - (using tasks as a sample)

        actions/
            tasks/
                tasks.actions.js
                taskMembers.actions.js
            index.js

        reducers/
            tasks/
                tasks.reducers.js
                taskMembers.reducers.js
            index.js
```

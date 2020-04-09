# Shabi CLI

## CLI Arguments

-   First Argument - `shabi` - [default]
-   Second Argument - `class` | `hook` | `service` - What you're trying to generate!
-   Third Argument - `HelloWorld` | `Task` | `Note` - Name
-   Fourth Argument - `--extra` | `-E` - Add Extras to the content you're generating!

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

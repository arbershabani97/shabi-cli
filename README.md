# Shabi CLI

## CLI Arguments

-   First Argument - `shabi` - [default]
-   Second Argument - `class` | `hook` | `service` - What you're trying to generate!
-   Third Argument - `HelloWorld` | `Task` | `Note` - Name
-   Fourth Argument - `--extras` | `-E` - Add Extras to the content you're generating!

## Options

```javascript
shabi class HelloWorld
shabi hook Task
~~shabi service NoteValidation~~
```

| Commands    |    Functionality     |
| ----------- | :------------------: |
| class       |    Create a class    |
| hook        |    Create a hook     |
| ~~service~~ | ~~Create a service~~ |

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

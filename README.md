# Shabi CLI

---

## Options

### class

`ex. shabi class HelloWorld`

```
import "./styles/HelloWorld.scss";

import React, {Component} from "react";

class HelloWorld extends Component {
    render(){
        return (
            <div className="HelloWorld">

            </div>
        )
    }
}

export default HelloWorld;
```

### hook

`ex. shabi hook HelloWorld`

```
import "./styles/HelloWorld.scss";

import React from "react";

const HelloWorld = () => {
    return (
        <div className="HelloWorld">

        </div>
    )
}

export default HelloWorld;
```

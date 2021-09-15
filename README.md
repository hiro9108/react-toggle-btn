## Props

The component takes the following props.

| Prop           | Type     |
| -------------- | -------- |
| `mainColor`    | _string_ |
| `subColor`     | _string_ |
| `borderColor`  | _string_ |
| `FrameWidth`   | _string_ |
| `FrameHeight`  | _string_ |
| `CircleWidth`  | _string_ |
| `CircleHeight` | _string_ |
| `onChange`     | function |

## Installation

```bash
npm i react-toggle-btn
```

## Usage

```javascript
import ToggleButton from "react-toggle-btn";
```

## Sample Code

```javascript
import { useRef } from "react";
import "./App.css";

import ToggleButton from "react-toggle-btn";

function App() {
  const backgroundRef = useRef(null);

  // This function is a sample for changing color theme.
  const changeColorHandler = (event) => {
    if (event.target.checked) {
      backgroundRef.current.style.backgroundColor = "#000000";
    } else {
      backgroundRef.current.style.backgroundColor = "#ffffff";
    }
  };

  return (
    <div className="App" ref={backgroundRef}>
      <ToggleButton onChange={changeColorHandler} />
    </div>
  );
}
```





https://user-images.githubusercontent.com/70537611/133424892-0853660f-d283-4cc8-87d9-87044ad448e2.mov





## License

MIT

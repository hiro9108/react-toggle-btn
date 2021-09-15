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
| `CircleTop`    | _string_ |
| `CircleLeft`   | _string_ |
| `CircleRight`  | _string_ |
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

## License

MIT

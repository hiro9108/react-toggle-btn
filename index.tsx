import React from "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

type Props = {
  mainColor?: string;
  subColor?: string;
  borderColor?: string;
  FrameWidth?: string;
  FrameHeight?: string;
  CircleWidth?: string;
  CircleHeight?: string;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
};

const ToggleButton: React.FC<Props> = ({
  mainColor = "#000000",
  subColor = "#ffffff",
  borderColor = "#000000",
  FrameWidth = "4rem",
  FrameHeight = "2rem",
  CircleWidth = "1.75rem",
  CircleHeight = "1.75rem",
  onChange,
}) => {
  return (
    <label>
      <input type="checkbox" className="Checkbox" onChange={onChange} />
      <span className="Check" />
      <style jsx>{`
        .Checkbox {
          display: none;
          visibility: hidden;
        }

        .Checkbox:checked ~ span {
          background-color: ${subColor};
        }

        .Checkbox:checked ~ span::before {
          transform: translateX(-50px);
        }

        .Checkbox:checked ~ span::after {
          transform: translateX(0);
        }

        /* check styles */

        .Check {
          position: relative;
          display: block;
          width: ${FrameWidth};
          height: ${FrameHeight};
          background-color: ${mainColor};
          cursor: pointer;
          border: 0.01rem solid ${borderColor};
          border-radius: 2rem;
          overflow: hidden;
          transition: ease-in 0.5s;
        }

        .Check::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          background-color: ${subColor};
          width: ${CircleWidth};
          height: ${CircleHeight};
          border-radius: 50%;
          transition: 0.5s;
        }

        .Check::after {
          content: "";
          position: absolute;
          top: 2px;
          right: 2px;
          background-color: ${mainColor};
          width: ${CircleWidth};
          height: ${CircleHeight};
          border-radius: 50%;
          transition: 0.5s;
          transform: translateX(50px);
        }
      `}</style>
    </label>
  );
};

export default ToggleButton;

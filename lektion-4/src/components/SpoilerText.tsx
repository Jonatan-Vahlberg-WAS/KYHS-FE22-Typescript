import React, { useState } from 'react';

interface SpoilerTextProps extends React.PropsWithChildren<{}>, React.HTMLAttributes<HTMLSpanElement> {
  spoilerColor: string;
}

const SpoilerText: React.FC<SpoilerTextProps> = ({ spoilerColor, children, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const hiddenStyle = {
    color: spoilerColor,
    backgroundColor: spoilerColor,
    cursor: 'pointer',
  }

  const visibleStyle = {
    color: 'inherit',
    backgroundColor: 'inherit',
    cursor: 'pointer',
    textDecoration: 'underline',
    textDecorationColor: spoilerColor,
    }

    let _style = props.style || {};
    _style = {
        ..._style,
        ...(isVisible ? visibleStyle : hiddenStyle),
    }

  return (
    <span
        onClick={toggleVisibility}
        {...props}
        style={_style}
    >
        {children}
    </span>
  );
}

export default SpoilerText;
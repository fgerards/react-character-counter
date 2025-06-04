import React from "react";
import { PropTypes } from "prop-types";

const styleSheet = {
  wrapper: {
    position: "relative"
  },
  characterCounter: {
    position: "absolute",
    right: "8px",
    bottom: "8px",
    fontSize: "12px",
    fontWeight: "600",
    background: "white",
    padding: "2px 6px",
    borderRadius: "8px",
    transition: "color 0.2s, font-weight 0.2s"
  }
};

const CharacterCounter = ({
  value = '',
  maxLength = 0,
  warningThreshold = 30,
  wrapperStyle = {},
  characterCounterStyle = {},
  overrideStyle = false,
  children
}) => {
  const length = value ? value.length : 0;
  const remaining = maxLength - length;

  let computedWrapperStyle = { ...styleSheet.wrapper, ...wrapperStyle };
  let computedCharacterCounterStyle = { ...styleSheet.characterCounter, ...characterCounterStyle };

  if (remaining < 0) {
    computedCharacterCounterStyle.color = "#e0245e"; // red
    computedCharacterCounterStyle.fontWeight = 700;
  } else if (remaining <= warningThreshold) {
    computedCharacterCounterStyle.color = "#ffad1f"; // orange
    computedCharacterCounterStyle.fontWeight = 700;
  } else {
    computedCharacterCounterStyle.color = "#657786"; // gray
    computedCharacterCounterStyle.fontWeight = 600;
  }

  let display;
  if (remaining <= warningThreshold) {
    display = remaining;
  } else {
    display = `${length}/${maxLength}`;
  }

  if (overrideStyle) {
    computedWrapperStyle = wrapperStyle;
    computedCharacterCounterStyle = characterCounterStyle;
  }

  return (
    <div style={computedWrapperStyle}>
      {children}
      <span style={computedCharacterCounterStyle}>{display}</span>
    </div>
  );
};

CharacterCounter.propTypes = {
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  warningThreshold: PropTypes.number,
  wrapperStyle: PropTypes.object,
  characterCounterStyle: PropTypes.object,
  overrideStyle: PropTypes.bool,
  children: PropTypes.node
};

CharacterCounter.defaultProps = {
  value: '',
  maxLength: 0,
  warningThreshold: 30,
  wrapperStyle: {},
  characterCounterStyle: {},
  overrideStyle: false
};

export default CharacterCounter;

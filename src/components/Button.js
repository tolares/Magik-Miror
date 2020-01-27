import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { theme } from '../constants';

class Button extends Component {
  render() {
    const {
      style,
      opacity,
      gradient,
      home,
      color,
      startColor,
      endColor,
      end,
      start,
      locations,
      shadow,
      order,
      children,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      order && styles.order,
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style,
    ];

    if (gradient) {
      return (
          <TouchableOpacity
              style={buttonStyles}
              activeOpacity={opacity}
              {...props}
          >
            <LinearGradient
                start={start}
                end={end}
                locations={locations}
                style={buttonStyles}
                colors={[startColor, endColor]}
            >
              {children}
            </LinearGradient>
          </TouchableOpacity>
      )
    }

    if (home) {
      return (
          <TouchableOpacity
              style={buttonStyles}
              activeOpacity={opacity || 0.8}
              {...props}
          >
              {children}
          </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  startColor: theme.colors.primary,
  endColor: theme.colors.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  //color: theme.colors.white,
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.sizes.radius,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    marginVertical: theme.sizes.padding / 3,
  },
  shadow: {
    borderRadius: 50,
    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: theme.colors.red,
  },
  order: {
    borderRadius: 50,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: theme.colors.red,

  },
  accent: { backgroundColor: theme.colors.accent, },
  primary: { backgroundColor: theme.colors.primary, },
  secondary: { backgroundColor: theme.colors.secondary, },
  tertiary: { backgroundColor: theme.colors.tertiary, },
  black: { backgroundColor: theme.colors.black, },
  white: { backgroundColor: theme.colors.white, },
  gray: { backgroundColor: theme.colors.gray, },
  gray2: { backgroundColor: theme.colors.gray2, },
  gray3: { backgroundColor: theme.colors.gray3, },
  gray4: { backgroundColor: theme.colors.gray4, },
});
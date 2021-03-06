/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { HandleName, ResizeCursor, ResizeHandleComponentType } from './types';

const propTypes = {
  active: PropTypes.bool.isRequired,
  nativeActive: PropTypes.bool.isRequired,
  cursor: PropTypes.oneOf([
    'ns-resize',
    'ew-resize',
    'nesw-resize',
    'nwse-resize',
  ] as ResizeCursor[]).isRequired,
  isBeingChanged: PropTypes.bool.isRequired,
  isInSelectionGroup: PropTypes.bool.isRequired,
  name: PropTypes.oneOf([
    'w',
    'n',
    's',
    'e',
    'nw',
    'ne',
    'sw',
    'se',
  ] as HandleName[]).isRequired,
  onMouseDown: PropTypes.func.isRequired,
  recommendedSize: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

const DefaultResizeHandleComponent: ResizeHandleComponentType = ({
  active,
  cursor,
  isInSelectionGroup,
  onMouseDown,
  recommendedSize,
  scale,
  x,
  y,
}) => (
  <rect
    fill={active ? 'rgba(229,240,244,1)' : 'rgba(229,240,244,0.3)'}
    height={recommendedSize}
    stroke={active ? 'rgba(53,33,140,1)' : 'rgba(53,33,140,0.3)'}
    strokeWidth={1 / scale}
    style={{ cursor, opacity: isInSelectionGroup ? 0 : 1 }}
    width={recommendedSize}
    x={x - recommendedSize / 2}
    y={y - recommendedSize / 2}
    // The onMouseDown prop must be passed on or resize will not work
    onMouseDown={onMouseDown}
  />
);

DefaultResizeHandleComponent.propTypes = propTypes;

export default DefaultResizeHandleComponent;

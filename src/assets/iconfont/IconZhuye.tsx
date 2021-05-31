/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconZhuye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M84.3 535.9l-33.5-37.1 464.7-419 457.6 419-33.8 36.9-424-388.3-431 388.5z m731.1-2v360.2h-600V533.9h-50v410.2h700V533.9h-50z"
        fill={getIconColor(color, 0, '#040000')}
      />
    </Svg>
  );
};

IconZhuye.defaultProps = {
  size: 18,
};

IconZhuye = React.memo ? React.memo(IconZhuye) : IconZhuye;

export default IconZhuye;

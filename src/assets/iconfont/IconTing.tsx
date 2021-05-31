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

let IconTing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M737.28 911.36V460.8L1006.933333 506.88v360.106667l-269.653333 44.373333z m68.266667-368.64v288.426667l133.12-22.186667V564.906667l-133.12-22.186667zM286.72 911.36L17.066667 865.28v-358.4L286.72 460.8v450.56zM85.333333 807.253333l133.12 22.186667V542.72L85.333333 564.906667v242.346666z"
        fill={getIconColor(color, 0, '#191919')}
      />
      <Path
        d="M252.586667 283.306667h518.826666v68.266666H252.586667z"
        fill={getIconColor(color, 1, '#00C97C')}
      />
      <Path
        d="M805.546667 870.4h-68.266667V250.88l-114.346667-83.626667H395.946667l-109.226667 83.626667V870.4h-68.266667V216.746667l153.6-117.76h273.066667l160.426667 117.76z"
        fill={getIconColor(color, 2, '#191919')}
      />
    </Svg>
  );
};

IconTing.defaultProps = {
  size: 18,
};

IconTing = React.memo ? React.memo(IconTing) : IconTing;

export default IconTing;

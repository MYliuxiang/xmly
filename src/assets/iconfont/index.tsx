/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconU138 from './IconU138';
import IconZhuye from './IconZhuye';
import IconTing from './IconTing';
import IconWode from './IconWode';

export type IconNames = 'icon-u138' | 'icon-zhuye' | 'icon-ting' | 'icon-wode';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-u138':
      return <IconU138 key="1" {...rest} />;
    case 'icon-zhuye':
      return <IconZhuye key="2" {...rest} />;
    case 'icon-ting':
      return <IconTing key="3" {...rest} />;
    case 'icon-wode':
      return <IconWode key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconShouye from './IconShouye';
import IconWodefill from './IconWodefill';
import IconFaxian from './IconFaxian';
import IconWotingwokan from './IconWotingwokan';
export { default as IconShouye } from './IconShouye';
export { default as IconWodefill } from './IconWodefill';
export { default as IconFaxian } from './IconFaxian';
export { default as IconWotingwokan } from './IconWotingwokan';

export type IconNames = 'icon-shouye' | 'icon-wodefill' | 'icon-faxian' | 'icon-wotingwokan-';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-shouye':
      return <IconShouye key="1" {...rest} />;
    case 'icon-wodefill':
      return <IconWodefill key="2" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="3" {...rest} />;
    case 'icon-wotingwokan-':
      return <IconWotingwokan key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

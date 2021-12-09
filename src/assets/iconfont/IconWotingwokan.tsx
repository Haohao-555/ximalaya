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

let IconWotingwokan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M729.9 877c-8.5 0-17.1-2.1-25-6.2l-197-103.6c-1.9-1-4.3-1-6.2 0l-197 103.6c-18.3 9.6-39.9 8-56.5-4.1s-24.8-32.2-21.4-52.5l37.6-219.4c0.4-2.1-0.3-4.4-1.9-5.9L103.1 433.5c-14.8-14.4-20-35.5-13.6-55 6.4-19.6 23-33.6 43.3-36.5l220.3-32c2.2-0.3 4-1.7 5-3.6l98.5-199.6c9.1-18.5 27.6-29.9 48.1-29.9 20.6 0 39 11.5 48.1 29.9l98.5 199.6c1 2 2.8 3.3 5 3.6l220.2 32c20.4 2.9 37 17 43.3 36.5 6.4 19.6 1.2 40.7-13.6 55L747.1 588.9c-1.6 1.5-2.3 3.7-1.9 5.9l37.6 219.4c3.5 20.3-4.7 40.4-21.4 52.5-9.4 6.8-20.4 10.3-31.5 10.3zM504.8 123.8c-1.9 0-4.4 0.6-6 3.7l-98.5 199.6c-7.8 15.8-22.9 26.8-40.4 29.4l-220.3 32c-3.4 0.5-4.8 2.7-5.4 4.5-0.6 1.8-0.8 4.4 1.7 6.8l159.4 155.4c12.7 12.3 18.4 30.1 15.5 47.5l-37.6 219.4c-0.6 3.4 1.1 5.4 2.6 6.5 1.5 1.1 3.9 2.1 7 0.5l197-103.6c15.7-8.2 34.3-8.2 50 0l197 103.6c3 1.6 5.5 0.6 7-0.5s3.2-3.1 2.6-6.5l-37.6-219.4c-3-17.4 2.8-35.2 15.4-47.5l159.4-155.4c2.4-2.4 2.3-5 1.7-6.8-0.6-1.8-2-4-5.4-4.5l-220.3-32c-17.5-2.6-32.6-13.5-40.4-29.4l-98.5-199.6c-1.4-3-4-3.7-5.9-3.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWotingwokan.defaultProps = {
  size: 18,
};

IconWotingwokan = React.memo ? React.memo(IconWotingwokan) : IconWotingwokan;

export default IconWotingwokan;

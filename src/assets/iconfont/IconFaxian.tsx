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

let IconFaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024A512 512 0 1 1 1024 512 512 512 0 0 1 512 1024z m279.272727-791.489939a40.866909 40.866909 0 0 0-50.455272-5.957819l-310.303031 190.650182a42.232242 42.232242 0 0 0-13.498182 13.498182l-190.619151 310.30303a41.084121 41.084121 0 0 0 56.692364 56.475152l310.30303-190.526061a42.201212 42.201212 0 0 0 13.498182-13.498182l190.619151-310.30303a40.897939 40.897939 0 0 0-6.237091-50.641454zM535.396848 552.339394a46.545455 46.545455 0 1 1 23.334788-40.339394 46.545455 46.545455 0 0 1-23.334788 40.339394z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFaxian.defaultProps = {
  size: 18,
};

IconFaxian = React.memo ? React.memo(IconFaxian) : IconFaxian;

export default IconFaxian;

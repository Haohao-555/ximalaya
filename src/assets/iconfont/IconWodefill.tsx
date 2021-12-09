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

let IconWodefill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M877.443978 872.455569c0 0-162.897363-82.738787-237.723501-88.071225l0-23.737947c119.721821-50.916177 195.064001-174.93835 195.064001-319.946246 0-190.075592-145.867966-344.544263-325.106669-344.544263s-325.106669 154.640685-325.106669 344.544263c0 146.728036 77.40635 271.954309 199.536368 321.666387l0 22.017806-1.548127 0c-69.493701 3.440282-235.315303 87.727196-235.315303 87.727196S125.570301 890.345036 127.978498 904.106165c2.408198 13.761129 14.793214 23.909961 29.070385 23.909961L423.154712 928.016126l177.346548 0 265.933815 0c14.277171 0 26.318159-9.804804 29.070385-23.393919C898.257685 891.033093 877.443978 872.455569 877.443978 872.455569z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWodefill.defaultProps = {
  size: 18,
};

IconWodefill = React.memo ? React.memo(IconWodefill) : IconWodefill;

export default IconWodefill;

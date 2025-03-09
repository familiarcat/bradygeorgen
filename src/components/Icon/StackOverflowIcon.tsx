import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const StackOverflowIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path d="M90.1875 114.162V83.027H104.062V128H0V83.027H13.875V114.162H90.1875Z" fill="currentColor" />
    <path
      d="M74.5781 0L65.2125 6.91892L99.5531 52.9297L108.919 46.0108L74.5781 0ZM90.1875 63.6541L46.1344 26.9838L53.4187 18.3351L97.4719 55.0054L90.1875 63.6541ZM31.5656 52.5838L83.5969 76.8L88.4531 66.4216L36.4219 42.2054L31.5656 52.5838ZM80.1281 89.9114L82.4869 79.706L26.64 68.1168L24.2812 79.5676L80.1281 89.9114V89.9114ZM79.7812 103.784H24.2812V93.4054H79.7812V103.784Z"
      fill="currentColor"
    />
  </Icon>
));

StackOverflowIcon.displayName = 'StackOverflowIcon';


export default StackOverflowIcon;

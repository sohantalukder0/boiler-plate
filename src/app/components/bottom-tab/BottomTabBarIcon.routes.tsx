import {View} from 'react-native';
import React from 'react';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {_bottomTabInterface} from './interface';
import bottomTabStyle from './styles.component';

const BottomTabBarIcon: React.FC<
  Omit<_bottomTabInterface, 'Component' | 'route'> & {focused: boolean}
> = ({Icon, focused}) => {
  return (
    <View style={bottomTabStyle.iconContainer}>
      <Icon
        fill={focused ? customTheme.colors.primary : customTheme.colors.grey}
      />
    </View>
  );
};

export default BottomTabBarIcon;

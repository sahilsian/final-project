import React from 'react';
import styled from 'styled-components/native';
import {View, StyleSheet, Image} from 'react-native';



const CustomAvatar = ({size, img, img_link}) => {

  const widthstlying = {
    width: size ? size : 130,
    height: size ? size : 130,

  }

  const imgstyling = {
    borderRadius: size ? size/2 : 100
  }
  
    return (
        <View style={widthstlying,
                {resizeMode:'contain'}}>
            <Image source={img_link ? {uri: img_link} : img} style={[imgstyling, styles.avatarCont]} resizeMode="cover" size={size}/>
        </View>
    )
}

var styles = StyleSheet.create({
    avatarCont: {
      width: "100%",
      height: "100%",
      borderRadius: 100
  
    }
});

CustomAvatar.defaultProps = {
    width: 130,
    height: 130,
    img: require("../../../assets/avatar.jpg"),

}

export default CustomAvatar


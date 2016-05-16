import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "width": "100%",
        "height": "100%",
        "overflow": "hidden"
    },
    "html": {
        "width": "100%",
        "height": "100%",
        "overflow": "hidden"
    },
    "canvas": {
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "container": {
        "position": "relative",
        "width": "100%",
        "height": "100%",
        "maxWidth": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center",
        "background": "50% 0% no-repeat"
    },
    "fallback": {
        "height": "100%",
        "width": "100%"
    },
    "fallback h1": {
        "color": "#FF3333",
        "font": "90px 'Geometria-Medium',Arial,sans-serif"
    },
    "fallback p": {
        "color": "white",
        "font": "xx-large 'PT Sans',Tahoma,sans-serif"
    }
});
import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Justifier": {
        "fontSize": "5%",
        "lineHeight": 0,
        "textAlign": "justify"
    },
    "Justifier:after": {
        "display": "inline-block",
        "width": "100%",
        "height": 0,
        "content": ""
    },
    "jItem": {
        "display": "inline-block",
        "verticalAlign": "top",
        "lineHeight": "normal",
        "fontSize": "2000%"
    },
    "text-left": {
        "textAlign": "left !important"
    },
    "text-center": {
        "textAlign": "center !important"
    },
    "text-right": {
        "textAlign": "right !important"
    },
    "vAligner:after": {
        "content": "",
        "display": "inline-block",
        "verticalAlign": "middle",
        "height": "100%",
        "width": 0,
        "background": "yellow"
    },
    "vItem": {
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "listHorz": {
        "listStyle": "none"
    },
    "listHorz>li": {
        "display": "inline-block"
    },
    "fillParent": {
        "width": "100%",
        "height": "100%"
    },
    "multiLayer fillParent": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%"
    },
    "floatLeft": {
        "float": "left"
    },
    "floatRight": {
        "float": "right"
    },
    "hidden": {
        "display": "none !important"
    },
    "invisible": {
        "opacity": "0 !important"
    },
    "Site-icon": {
        "display": "inline-block",
        "backgroundImage": "url('../img/sprite.png')"
    },
    "icon-close": {
        "width": 32,
        "height": 31,
        "backgroundPosition": "0px 0px"
    },
    "with-icon-close:before": {
        "width": 32,
        "height": 31,
        "backgroundPosition": "0px 0px",
        "content": ""
    },
    "icon-map-hide": {
        "width": 28,
        "height": 15,
        "backgroundPosition": "-34px 0px"
    },
    "with-icon-map-hide:before": {
        "width": 28,
        "height": 15,
        "backgroundPosition": "-34px 0px",
        "content": ""
    },
    "icon-map-show": {
        "width": 28,
        "height": 15,
        "backgroundPosition": "0px -33px"
    },
    "with-icon-map-show:before": {
        "width": 28,
        "height": 15,
        "backgroundPosition": "0px -33px",
        "content": ""
    },
    "*": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": 0
    },
    "html": {
        "height": "100%"
    },
    "body": {
        "position": "relative",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "minHeight": "100%",
        "paddingBottom": 77,
        "backgroundColor": "#000000",
        "fontSize": 10
    },
    "page": {
        "background": "#1A1A1A 50% 0% no-repeat",
        "textAlign": "center"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block"
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "time": {
        "display": "block"
    },
    "iframe": {
        "border": "none"
    },
    "ul": {
        "listStyleType": "none"
    },
    "::-moz-selection": {
        "color": "#ffffff",
        "background": "#dc3333"
    },
    "::selection": {
        "color": "#ffffff",
        "background": "#dc3333"
    },
    "title": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 60,
        "marginLeft": 0,
        "color": "#ffffff",
        "fontFamily": "'Geometria-Medium',Arial,sans-serif",
        "fontSize": 48,
        "fontWeight": 100,
        "letterSpacing": 0.075,
        "textTransform": "uppercase"
    },
    "container h1": {
        "position": "relative",
        "zIndex": 10,
        "fontSize": 2.33,
        "letterSpacing": 0.1,
        "textAlign": "center"
    },
    "container h2": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginBottom": 1,
        "color": "#dc3333",
        "fontFamily": "'PT Sans',Tahoma,sans-serif",
        "fontSize": 1.09,
        "fontWeight": 400
    },
    "container a": {
        "color": "#ffffff",
        "borderBottom": "1px solid #ffffff",
        "textDecoration": "none"
    },
    "container a:hover": {
        "border": "none"
    },
    "fullScreen": {
        "height": "100%",
        "width": "100%"
    },
    "container": {
        "position": "relative",
        "zIndex": 1,
        "clear": "both",
        "display": "block",
        "maxWidth": 1200,
        "paddingTop": 1.66,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "color": "#ffffff",
        "font": "24px/1.2 'PT Sans',Tahoma,sans-serif",
        "textAlign": "left"
    },
    "full-width container": {
        "maxWidth": "none",
        "paddingLeft": "0 !important",
        "paddingRight": "0 !important"
    },
    "container:last-child": {
        "paddingBottom": 4
    },
    ";font-weight:400;font-style:normal;}link": {
        "borderBottom": "1px solid",
        "color": "#ffffff",
        "textDecoration": "none"
    },
    "link:hover": {
        "color": "#dc3333"
    },
    "link-st": {
        "position": "relative",
        "zIndex": 1,
        "display": "inline-block",
        "verticalAlign": "middle",
        "whiteSpace": "nowrap",
        "marginLeft": 0.66,
        "marginRight": 0.66,
        "border": "none",
        "color": "#ffffff",
        "fontSize": 18,
        "textTransform": "lowercase",
        "textDecoration": "none"
    },
    "link-st:after": {
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "zIndex": 1,
        "width": "100%",
        "height": 0,
        "borderBottom": "2px solid #dc3333",
        "content": "",
        "WebkitTransition": "border .2s linear 0s,bottom .2s linear 0s",
        "MozTransition": "border .2s linear 0s,bottom .2s linear 0s",
        "OTransition": "border .2s linear 0s,bottom .2s linear 0s",
        "transition": "border .2s linear 0s,bottom .2s linear 0s"
    },
    "link-st:hover:after": {
        "bottom": "38%",
        "borderWidth": 3
    },
    "link-bg": {
        "position": "relative",
        "whiteSpace": "nowrap",
        "borderBottom": "1px solid #dc3333",
        "color": "#ffffff",
        "textDecoration": "none"
    },
    "link-bg:after": {
        "position": "absolute",
        "top": -0.05,
        "right": -0.4,
        "bottom": -0.1,
        "left": -0.4,
        "zIndex": -1,
        "background": "#dc3333",
        "borderBottom": "1px solid #dc3333",
        "opacity": 0,
        "WebkitTransition": "opacity 0.1s linear 0s",
        "MozTransition": "opacity 0.1s linear 0s",
        "OTransition": "opacity 0.1s linear 0s",
        "transition": "opacity 0.1s linear 0s",
        "content": ""
    },
    "link-bg:hover": {
        "borderColor": "transparent"
    },
    "link-bg:hover:after": {
        "opacity": 1
    },
    "link-bg-block": {
        "display": "inline-block",
        "whiteSpace": "nowrap",
        "marginTop": 0,
        "marginRight": 0.4,
        "marginBottom": 0.16,
        "marginLeft": 0.4,
        "paddingTop": 0.16,
        "borderBottom": "2px solid #dc3333",
        "color": "#ffffff",
        "fontSize": 18,
        "textTransform": "lowercase",
        "textDecoration": "none"
    },
    "link-bg-block:hover": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0.16,
        "paddingRight": 0.4,
        "paddingBottom": 0.16,
        "paddingLeft": 0.4,
        "backgroundColor": "#dc3333",
        "borderColor": "transparent",
        "color": "#ffffff"
    },
    "Map": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": "0 !important",
        "zIndex": 1000,
        "fontSize": 16,
        "display": "none"
    },
    "Map-info": {
        "position": "absolute",
        "top": 0,
        "zIndex": 10,
        "display": "table",
        "height": "75%",
        "width": "100%",
        "backgroundColor": "#131313",
        "fontFamily": "'Geometria-Medium',Arial,sans-serif",
        "fontSize": 1.125,
        "lineHeight": 1.33,
        "textAlign": "left",
        "WebkitTransition": "-webkit-transform .3s ease 0s",
        "MozTransition": "-moz-transform .3s ease 0s",
        "OTransition": "-o-transform .3s ease 0s",
        "transition": "transform .3s ease 0s"
    },
    "Map-info>icon-close": {
        "position": "absolute",
        "top": 34,
        "right": 34,
        "zIndex": 20,
        "backgroundColor": "#131313",
        "cursor": "pointer",
        "WebkitTransition": "-webkit-transform 0.3s ease-out",
        "MozTransition": "-moz-transform 0.3s ease-out",
        "OTransition": "-o-transform 0.3s ease-out",
        "transition": "transform 0.3s ease-out"
    },
    "Map-info>icon-close:hover": {
        "WebkitTransform": "rotate(90deg)",
        "MozTransform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "OTransform": "rotate(90deg)",
        "transform": "rotate(90deg)"
    },
    "Map-info-inner": {
        "display": "table-cell",
        "verticalAlign": "middle"
    },
    "Map-contacts": {
        "maxWidth": 540,
        "marginTop": 1.1,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "fontSize": 1.2
    },
    "Map-contacts>p": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.85,
        "marginLeft": 0,
        "color": "white",
        "fontSize": "inherit",
        "fontFamily": "'PT Sans',Tahoma,sans-serif"
    },
    "Map-contacts>pintro": {
        "marginBottom": 2
    },
    "Map-contacts big-link": {
        "display": "block",
        "marginTop": 0.15,
        "marginRight": 0.37,
        "marginBottom": 0.15,
        "marginLeft": 0.37
    },
    "Map-contacts tel": {
        "whiteSpace": "nowrap"
    },
    "Map-toggler": {
        "position": "absolute",
        "right": 0,
        "bottom": 0,
        "width": 90,
        "height": 90,
        "backgroundColor": "#131313",
        "cursor": "pointer",
        "WebkitTransition": "-webkit-transform .3s ease 0s",
        "MozTransition": "-moz-transform .3s ease 0s",
        "OTransition": "-o-transform .3s ease 0s",
        "transition": "transform .3s ease 0s"
    },
    "Map-toggler>icon-map-hide": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "marginTop": -7.5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -14
    },
    "Map-toggler>icon-map-show": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "marginTop": -7.5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -14,
        "display": "none"
    },
    "_:-o-prefocus": {
        "OTransition": "none",
        "transition": "none"
    },
    "body:last-child Map-toggler": {
        "OTransition": "none",
        "transition": "none"
    },
    "Map-infoslid": {
        "WebkitTransform": "translateY(-100%)",
        "MozTransform": "translateY(-100%)",
        "MsTransform": "translateY(-100%)",
        "OTransform": "translateY(-100%)",
        "transform": "translateY(-100%)"
    },
    "ie8minus Map-infoslid": {
        "top": "-50%"
    },
    "Map-infoslid>Map-toggler": {
        "WebkitTransform": "translateY(99%)",
        "MozTransform": "translateY(99%)",
        "MsTransform": "translateY(99%)",
        "OTransform": "translateY(99%)",
        "transform": "translateY(99%)"
    },
    "ie8minus Map-infoslid>Map-toggler": {
        "top": "100%",
        "bottom": "auto"
    },
    "Map-infoslid icon-map-hide": {
        "display": "none"
    },
    "Map-infoslid icon-map-show": {
        "display": "block"
    },
    "htdt-map": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 5,
        "backgroundColor": "#f07373 !important"
    },
    "Footer": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "zIndex": 9999,
        "width": "100%",
        "height": 77,
        "color": "#ffffff",
        "fontFamily": "'PT Sans',Tahoma,sans-serif",
        "fontSize": 10,
        "fontStyle": "normal",
        "textAlign": "center"
    },
    "index-page Footer": {
        "position": "fixed",
        "bottom": -1
    },
    "portfolio-work Footer": {
        "display": "none"
    },
    "text-page Footer": {
        "background": "#151515"
    },
    "Footer-menu": {
        "listStyleType": "none",
        "overflow": "hidden",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "justify"
    },
    "Footer-menu:after": {
        "display": "inline-block",
        "width": "100%",
        "height": 0,
        "content": ""
    },
    "Footer-menu>li": {
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "Footer-menu>li:first-child": {
        "height": "100%",
        "paddingLeft": "7.7%"
    },
    "Footer-menu>lilast": {
        "paddingRight": "7.7%"
    },
    "Footer link-st": {
        "marginTop": 0.23,
        "marginBottom": 0.23,
        "font": "18px 'PT Sans',Tahoma,sans-serif",
        "color": "white"
    },
    "index-page Footer-logoWr": {
        "display": "none"
    },
    "Footer-logo": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "width": 23,
        "height": 23,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundColor": "#dc3333",
        "border": "medium none",
        "WebkitBorderRadius": "100%",
        "MozBorderRadius": "100%",
        "borderRadius": "100%",
        "WebkitTransition": "-webkit-transform .5s",
        "MozTransition": "-moz-transform .5s",
        "OTransition": "-o-transform .5s",
        "transition": "transform .5s"
    },
    "Footer-logo:after": {
        "content": "none"
    },
    "Footer-logo:hover": {
        "WebkitBorderRadius": "0%",
        "MozBorderRadius": "0%",
        "borderRadius": "0%",
        "WebkitTransform": "scale(1.2)",
        "MozTransform": "scale(1.2)",
        "MsTransform": "scale(1.2)",
        "OTransform": "scale(1.2)",
        "transform": "scale(1.2)"
    }
});
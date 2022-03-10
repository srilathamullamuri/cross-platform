import * as React from 'react';
import { Banner } from 'react-native-paper';
var ButtonWeb = function (props) {
    var _a = React.useState(true), visible = _a[0], setVisible = _a[1];
    var handlePress = function () {
        setVisible(false);
        props.hideBanner ? props.hideBanner() : null;
    };
    return (React.createElement(Banner, { style: { borderColor: 'black' }, visible: visible, actions: [
            {
                label: 'Dont show me this again',
                onPress: function () { return handlePress(); },
            },
            {
                label: 'Dismiss',
                onPress: function () { return setVisible(false); },
            },
        ] }, props.message ? props.message : 'No message to show'));
};
export default ButtonWeb;
//# sourceMappingURL=index.web.js.map
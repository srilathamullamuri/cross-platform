// @ts-nocheck
// import CustomButton from "./CustomButton/index";
// export { CustomButton }
import * as React from 'react';
import { Banner } from 'react-native-paper';
var CustomButton = function () {
    var _a = React.useState(true), visible = _a[0], setVisible = _a[1];
    return (React.createElement(Banner, { visible: visible, actions: [
            {
                label: 'Fix it',
                onPress: function () { return setVisible(false); },
            },
            {
                label: 'Learn more',
                onPress: function () { return setVisible(false); },
            },
        ] }, "There was a problem processing a transaction on your credit card."));
};
export default CustomButton;
//# sourceMappingURL=index.js.map
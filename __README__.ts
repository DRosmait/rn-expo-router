// Expo Router

/*
    1. Navigation with Expo Router.
    2. Groued screens with (groupname).
    3. "presentation" option to specify the presentation style.
    4. Splash screen and font loading.
*/
import RootLayout from "./app/_layout";

/*
    Link component from Expo Router:
    1. "asChild" prop to work with child components.
    2. "replace" prop to replace the current route in navigation.
*/
import RootPage from "./app/index";

/*
    1. Drawer navigator example.
*/
import DrawerLayout from "./app/(authenticated)/(drawer)/_layout";

/*
    1. Tab navigator example.
    2. "tabPress" event to handle programatical tab press.
    3. "DrawerToggleButton" component to show burger button and toggle the drawer.
*/
import TabsLayout from "./app/(authenticated)/(drawer)/(tabs)/_layout";

/*
    1. 'DrawerActions.openDrawer()' method to open the drawer programmatically.
*/
import Settings from "./app/(authenticated)/(drawer)/settings";

/*
    1. Use Stack navigator next to Tabs navigator to hide bottom tabs for Stack screens.
    2. Use 'presentation' option to specify 'modal' presentation style for a screen.
*/
import AuthenticatedStackLayout from "./app/(authenticated)/_layout";

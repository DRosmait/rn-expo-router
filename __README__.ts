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
    1. 'DrawerActions.openDrawer()' method to open the drawer programmatically.
*/
import Settings from "./app/(authenticated)/(drawer)/settings";

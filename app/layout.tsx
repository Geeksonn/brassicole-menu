import KioskScroller from './_ui/kioskScroller';
import UserEventListener from './_ui/userEventListener';
import './globals.css';

export const metadata = {
    title: 'Brassicole Menu',
    description: 'Menu de la brassicole',
};

/*
 * Kiosk rotation (see globals.css): ?rot=-90 or ?rot=90 turns it on and remembers it in this
 * browser, ?rot=0 turns it off. Runs before the first paint so the page never shows unrotated.
 */
const ROTATION_SCRIPT = `(function () {
    var key = 'menu-rot';
    var valid = function (v) { return v === '90' || v === '-90'; };
    var rot = new URLSearchParams(location.search).get('rot');
    try {
        if (rot !== null) valid(rot) ? localStorage.setItem(key, rot) : localStorage.removeItem(key);
        else rot = localStorage.getItem(key);
    } catch (e) {}
    if (valid(rot)) document.documentElement.dataset.rot = rot;
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // data-rot is added by ROTATION_SCRIPT before hydration
        <html lang='en' suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: ROTATION_SCRIPT }} />
                <link rel='stylesheet' href='https://use.typekit.net/jys2xij.css' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </head>
            <body>
                <KioskScroller>{children}</KioskScroller>
            </body>
            <UserEventListener />
        </html>
    );
}

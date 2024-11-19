import UserEventListener from './_ui/userEventListener';
import './globals.css';

export const metadata = {
    title: 'Brassicole Menu',
    description: 'Menu de la brassicole',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <link rel='stylesheet' href='https://use.typekit.net/jys2xij.css' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </head>
            <body>{children}</body>
            <UserEventListener />
        </html>
    );
}

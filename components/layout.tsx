import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MENU_PAGE, ROUTES_PAGE, CHOICE_PAGE } from '../lib/constants';

type LayoutProps = {
    title: string;
    activePage: string;
    children: React.ReactNode;
};

type FooterButtonProps = {
    href?: any;
    onClick?: any;
    icon: string;
    text: string;
    active: boolean;
};

const FooterButton = React.forwardRef<HTMLAnchorElement, FooterButtonProps>(
    ({ href, onClick, icon, text, active }: FooterButtonProps, ref) => {
        const iconFile = active ? `/${icon}_active.svg` : `/${icon}.svg`;
        const textClass = active ? 'footerText active' : 'footerText';

        return (
            <a href={href} onClick={onClick} ref={ref} className='footerBtn'>
                {/*<div className='footerBtn'>*/}
                    <div className='flex flex-col'>
                        <Image src={iconFile} width='35' height='35' />
                        <p className={textClass}>{text}</p>
                    </div>
                {/*</div>*/}
            </a>
        );
    }
);

const Layout = ({ title, activePage, children }: LayoutProps) => {
    return (
        <div className='flex flex-col'>
            <header>
                <p>{title}</p>
                <div>
                    <Image src='/logo.svg' width='64' height='76' />
                </div>
            </header>
            <main>{children}</main>
            <footer>
                <Link href='/' passHref>
                    <FooterButton icon='icon_beer' text='La carte' active={activePage === MENU_PAGE} />
                </Link>
                <Link href='/routes' passHref>
                    <FooterButton icon='icon_routes' text='Nos routes' active={activePage === ROUTES_PAGE} />
                </Link>
                <Link href='/choice' passHref>
                    <FooterButton icon='icon_choice' text='La carte' active={activePage === CHOICE_PAGE} />
                </Link>
            </footer>
        </div>
    );
};

export default Layout;

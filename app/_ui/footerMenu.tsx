import Link from 'next/link';
import Image from 'next/image';

type FooterBtnProps = {
    icon: string;
    text: string;
    url: string;
    active: boolean;
};

const FooterButton: React.FunctionComponent<FooterBtnProps> = ({ icon, text, url, active }) => {
    const iconFile = active ? `/${icon}_active.svg` : `/${icon}.svg`;
    /* <Link href={url} className='flex flex-col w-1/3 cursor-pointer border-r last:border-r-0 border-dark-white'>
     */
    return (
        <Link
            href={url} className='flex justify-center w-1/3 border-r last:border-r-0 border-dark-white'>
            <div className='flex flex-col'>
            <Image alt='Icone du menu' src={iconFile} width='35' height='35' className='mx-auto' />
            <p className={`pt-4 font-normal text-sm lg:text-lg ${active ? 'text-red' : ''}`}>{text}</p></div>
        </Link>
    );
};

type Props = {
    menuActive: number;
};

const FooterMenu: React.FunctionComponent<Props> = ({ menuActive }) => {
    const menus: FooterBtnProps[] = [
        { icon: 'icon_beer', text: 'La carte', url: '/', active: menuActive === 1 },
        { icon: 'icon_routes', text: 'Nos routes', url: '/routes', active: menuActive === 2 },
        { icon: 'icon_choice', text: 'Arbre de choix', url: '/choice', active: menuActive === 3 },
    ];
    return (
        <footer>
            {menus.map((m, i) => (
                <FooterButton key={`menu_${i}`} {...m} />
            ))}
        </footer>
    );
};

export default FooterMenu;

/*
const FooterButton = React.forwardRef<HTMLAnchorElement, FooterButtonProps>(
    ({ href, onClick, icon, text, active }: FooterButtonProps, ref) => {
        const iconFile = active ? `/${icon}_active.svg` : `/${icon}.svg`;
        const textClass = active ? 'footerText active' : 'footerText';

        return (
            <a href={href} onClick={onClick} ref={ref} className='footerBtn'>
                <div className='flex flex-col'>
                    <Image src={iconFile} width='35' height='35' />
                    <p className={textClass}>{text}</p>
                </div>
            </a>
        );
    }
);
*/

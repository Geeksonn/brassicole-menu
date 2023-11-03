import Image from 'next/image';

type Props = {
    title: string;
};

const Header: React.FunctionComponent<Props> = ({ title }) => {
    return (
        <header>
            <p>{title}</p>
            <div>
                <Image alt='Logo Brassicole' src='/logo.svg' width='64' height='76' />
            </div>
        </header>
    );
};

export default Header;
type Props = {
    children: React.ReactNode;
};

const PageWrapper: React.FunctionComponent<Props> = ({ children }) => {
    return <div className='flex flex-col'>{children}</div>;
};

export default PageWrapper;

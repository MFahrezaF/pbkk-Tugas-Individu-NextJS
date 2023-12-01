const Content = ({ children }) => {
    return (
        <div className="min-h-[600px] max-h-screen overflow-y-scroll">
            {children}
        </div>
    );
};
export default Content;

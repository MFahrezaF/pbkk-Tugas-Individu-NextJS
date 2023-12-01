const Layout = ({ children }) => {
    return (
        <>
            <div style={{ height: 400, width: 600, background: "red" }}>
                <h2>Layout Dashboard</h2>
                {children}
            </div>
        </>
    );
};
export default Layout;

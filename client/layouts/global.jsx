
const Layout = ({children}) => {

    /**
     * Default Layout for all pages
     * (Last Update: 2025-06-13)
     */

    return (
        <>
            <div className={'p-4'}>
                {children}
            </div>
        </>
    )
}

export default Layout
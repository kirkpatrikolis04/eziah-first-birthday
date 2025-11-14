const Container = ({ children, className }) => {

    const style = className ?? 'max-w-[1200px] mx-auto'

    return ( 
        <div className={style}>
            {children}
        </div>
     );
}
 
export default Container;
import Cake from "../assets/pink-cake.gif"

const Loader = () => {
    return ( 
        <div className="fixed inset-[0] flex justify-center items-center bg-[#000] z-[999]">
            <div className="bg-black relative">
                <img src={Cake} />
                <h4 className="relative top-[-20px] text-white text-center">Loading...</h4>
            </div>
            
        </div>
     );
}
 
export default Loader;
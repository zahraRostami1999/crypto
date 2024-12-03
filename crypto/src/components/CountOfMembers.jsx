import GoldBtn from "./buttons/GoldBtn";

const CountOfMembers = () => {
    return ( 
        <>
        <div className="px-10 py-5">
            <div className="">
                <h1 className="text-7xl font-bold text-yellow-400">254,785</h1>
            </div>
            <div>
            <h1 className="text-5xl font-bold text-white">USERS</h1>
            </div>
            <div className="">
                <h1 className="text-5xl font-bold text-white"> TRUST US</h1>
            </div>
            <div className="w-1/2 text-black mt-10">
                <GoldBtn value="Join Us" />
            </div>
        </div>
        </>
     );
}
 
export default CountOfMembers;
const GoldBtn = (props) => {
    
    return ( 
        <>
        <div>
            <button className="bg-yellow-500 w-full rounded py-3 text-lg text-black">{props.value}</button>
        </div>
        </>
     );
}
 
export default GoldBtn;
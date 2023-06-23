export default function Weather({loading,weather}){

    return(
    <div className="mt-2 text-center">
        <span className="text-white/70 text-2xl  tracking-widest">
            {loading? 'loading...' :weather}
        </span>
    </div>)
}
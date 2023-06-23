
import Item from "./component/Item";

export default function Details ({humidity,wind,loading}){
    return(
    <div className="flex text-white/70 justify-around gap-8 mt-8">
        <Item title="HUMIDITY" data={`${humidity}%`} loading={loading}/>
        <div className="h-15 w-0.5 bg-white/70"></div>
        <Item title="WIND" data={`${wind}KM/H`} loading={loading}/>       
    </div>)
}
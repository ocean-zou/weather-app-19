export default function Temperature({
    value, className,loading}) {
    return(
    <div className={className}>
        {loading ? <div>loading...</div> :`${value}℃`}
    </div>)
    
}
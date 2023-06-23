export default function Item ({title,data,loading}){
    return(
    <div className="text-white/70 text-center min-w-[90px]">
        <div className="mb-3">{title}</div>
        <div className='my-2'>{loading? "..." :data}</div>
    </div>)
}
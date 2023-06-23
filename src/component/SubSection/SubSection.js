export default function SubSection({title,children}){
    return(
        <div>
            <div className="text-2xl tracking-widest">{title}</div>
            <div className="mt-4">{children}</div>
        </div>
    )
}
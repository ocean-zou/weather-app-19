export default function BackgroundImage({image,children}){
    return (
        <div 
        className='bg-center bg-cover' 
        style={{ backgroundImage: `url(${image})`}}>
            {children}
        </div>
    )
}
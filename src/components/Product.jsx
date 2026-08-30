export default function Product({children}){
    const {image, title, price } = children
    return(
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <span>{price}</span>
        </div>
    )
}
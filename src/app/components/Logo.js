import '../styles/Logo.css'
import Image from 'next/image'
function Logo (props){
    return(
    <div className="icon" id={props.ID}>
        <Image src="/YJL_logo.svg" alt="YJL" width={70} height={70} priority />
        <p>Stock Monitoring</p>
    </div>)
}
export default Logo;
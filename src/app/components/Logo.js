import '../styles/Logo.css'
import Image from 'next/image'
function Logo (){
    return(
    <div className="icon">
        <Image src="/YJL_logo.svg" alt="YJL" width={80} height={70} priority />
        <p>Stock Monitoring</p>
    </div>)
}
export default Logo;
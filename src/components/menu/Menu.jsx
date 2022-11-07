import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Quote</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Introduction</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#early">Early Life</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Education</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#conclusion">Video</a>
            </li>
            
        </ul>
    </div>
  )
}

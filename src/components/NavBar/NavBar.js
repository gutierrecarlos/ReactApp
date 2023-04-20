import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (
        <nav>
            <h3>Mercado De Carnes</h3>
            <div className="Productos" onClick="">
                <button>Vacuna</button>
                <button>Cerdo</button>
                <button>Pollo</button>
                <button>Pescados</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
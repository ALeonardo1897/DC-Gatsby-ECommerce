import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { StyledHeader, MenuItem } from "../styles/components"
import { CartContext } from "../context"

const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link>
        <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="Logo"></img>
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="">Productos</Link>
          </MenuItem>
        </ul>
        <ul>
          <MenuItem margin>
            <a href="https://www.platzi.com">Platzi</a>
          </MenuItem>
        </ul>
        <ul>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="cart"
                ></img>
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

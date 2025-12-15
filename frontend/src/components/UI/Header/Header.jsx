const Header = ({ text = 'ничего не передали(', title = "ХЕЙ" }) => { // text: drugoeNazvanie
  return (
    <header className="header">{text} {title}</header>
  )
}

export default Header
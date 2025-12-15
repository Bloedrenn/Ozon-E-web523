const Header = ({ text, title }) => { // text: drugoeNazvanie
  return (
    <header className="header">{text} {title}</header>
  )
}

export default Header
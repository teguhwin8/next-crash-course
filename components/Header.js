import headerStyles from "../styles/Header.module.css"

const Header = () => {
	return (
		<>
			<h1 className={headerStyles.title}><span>WebDev</span> News</h1>
      <p className={headerStyles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</>
	)
}

export default Header

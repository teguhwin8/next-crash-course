import styles from "../styles/Layout.module.css"
import Head from "next/head"
import Nav from "./Nav"
import Header from "./Header"

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className={styles.container}>
				<Head>
					<title>Next Crash Course 2021</title>
				</Head>
				<Header />
				<main className={styles.main}>{children}</main>
			</div>
		</>
	)
}

export default Layout

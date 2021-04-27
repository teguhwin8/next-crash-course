import Link from 'next/link'
import { useRouter } from "next/router"

const index = ({ article }) => {
	// const router = useRouter()
	// const {id} = router.query

	return (
		<>
      <Link href="/">Go Back</Link>
			<h1>{article.title}</h1>
      <p>{article.body}</p>
		</>
	)
}

export const getServerSideProps = async (context) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
	)
	const article = await res.json()
	return {
		props: {
			article,
		},
	}
}

export default index

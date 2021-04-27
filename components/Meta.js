import Head from 'next/head'

const Meta = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Web Dev News'
}



export default Meta

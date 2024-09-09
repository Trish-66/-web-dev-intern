import Head from 'next/head'
// The main page component that takes 'items' as props
// 'items' will be passed from the getStaticProps function below
export default function Home({ items }) {
  return (
    <div>
      <Head>
        <title>Checklist</title>
      </Head>
      <h1>Checklist</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  // Simulating a static data source (array of objects)
  const data = [
    { id: 1, name: 'Book' },
    { id: 2, name: 'Pen' },
    { id: 3, name: 'Laptop' },
  ]
  // Returning the static data as props to the component
  return {
    props: {
      items: data,
    },
  }
}
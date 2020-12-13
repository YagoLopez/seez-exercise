export default function JokeErrorCmp({ data }) {
  return (
    <div>
      <h1>Error:</h1>
      <h2>{data.message}</h2>
    </div>
  )
}

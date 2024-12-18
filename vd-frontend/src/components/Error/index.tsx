/**
 * @function ErrorComponent
 * @returns A stateless component to handle error state
 * upon errored fetching of data
 */
export default function ErrorComponent() {
  return (
    <div>
      <p style={{ color: 'red' }}>Failed to fetch data.</p>
    </div>
  )
}

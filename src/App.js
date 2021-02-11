import Button from "./components/Button"

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Hello World!</h1>
        <p>
          Welcome to my little app! Hopefully you like React and want to start
          learning.
        </p>
        <Button link='https://google.com' name='Click Here' />
      </div>
    </div>
  )
}

export default App

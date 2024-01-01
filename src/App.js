import Counter from "./components/Counter"
import CounterProvider from "./context/CounterProvider"


const App = () => {
  return (
    <>
    {/* 4- Wrapped the component that we need  */}
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  )
}

export default App
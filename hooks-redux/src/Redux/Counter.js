function Counter({increment, decrement, value}) {
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
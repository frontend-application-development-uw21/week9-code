import { connect } from 'react-redux';
import { decrement, increment } from './store';

export function Counter({increment, decrement, value}) {
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    value: state
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

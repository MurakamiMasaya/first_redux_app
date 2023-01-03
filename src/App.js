import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './actions';

function App() {
  // useSelector()のみがstoreにアクセスできる
  const counter = useSelector((state) => state.counter)
  const isLogin = useSelector((state) => state.isLogin)
  // useDispatch()でstoreのreducer()を発火させる
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>カウント: {counter}</h3>
      <button onClick={() => dispatch(increment(7))}>+</button>
      <button onClick={() => dispatch(decrement(4))}>-</button>
      <h3>{isLogin ? "ログインに成功" : "ログインしてください"}</h3>
      <button onClick={() => dispatch(login())}>ログイン</button>
      <button onClick={() => dispatch(logout())}>ログアウト</button>
    </div>
  );
}

export default App;

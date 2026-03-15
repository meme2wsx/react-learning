const App = () => {
  const onClickButton = () => {
    alert('クリックされたよ！')
  };

  const contentStyle= {
    color: "blue",
    fontSize: "20px",
  };

  return (
    <div>
      {console.log("私は、パンダ🐼。consoleの住人であります。")}
      <h1 style={{ color: "red" }}>赤です</h1>
      <p style={contentStyle}>ここの段落は、App.jsxに書いているよ！</p>
      <button onClick={onClickButton}>クリックしてね</button>
    </div>
  )
}
export default App
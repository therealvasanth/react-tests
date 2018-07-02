// this will not work in static server

function Navbar(props){
	return <p>welcome back, {props.name}</p>;
}

const ele = <Navbar name="Niharika" />;

ReactDOM.render(ele, document.getElementById("root"));
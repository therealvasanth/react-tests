// this will not work in static server

function Navbar(props){
	return <p>welcome back, {props.name}</p>;
}

//const ele = <Navbar name="Niharika" />;

// composing components

/** so this is how an app is made as one which is really composed of multiple components **/

function Ele(){
	return(
		<div>
			<Navbar name="john doe" />
			<Navbar name="jane doe" />
			<Navbar name="lil john doe" />
			<Navbar name="lil jane doe" />
		</div>
	);
}

ReactDOM.render(<Ele />, document.getElementById("root"));


import React,{useState} from "react";

//create your first component
const Home = () => {

	const [newTask, setNewTask] = useState("");
	const [pendingTask, setPendingTask] = useState([]);
	const [hidden, setHidden] = useState(true);

	return (
		<div className="text-center">
			<h1 className="text-center mt-5 display-1">todos</h1>
			<div className="col-4 mx-auto">
				<input type="text" className="form-control p-3" placeholder="What needs to be done" 
				onChange={(e) =>{
					setNewTask (e.target.value);
				}}
				onKeyDown={(e) => {
					if(e.key == "Enter"){
						setPendingTask([...pendingTask, newTask]);
						setNewTask("");
					}
				}}
				 value={newTask} />
				{pendingTask.map(task => 
					<div className="d-flex align-items-center form-control" style={{borderBottom:"1px solid #e3e3e3", backgroundColor:"white"}}
						onMouseEnter={() =>{ setHidden(false); console.log("mouse enter") }}
						onMouseLeave={()=>{ setHidden(true); console.log("mouse leave")	}}>	
							<p className="p-3 col-11 fs-3 fw-light text-start" style={{marginBottom:"0"}} key={task}>{task}</p>
							{hidden ? null : 
								<i className="col-1 fa-duotone fa-solid fa-xmark" onClick={()=>{
									setPendingTask([...pendingTask].filter((value)=> value !== task))
									}}>
								</i>
							}
					</div>
					)}
					<div className="form-control text-body-tertiary" style={{backgroundColor:"white"}}>
						<p className="text-start" style={{marginBottom:"0", fontSize:"12px"}}>{(pendingTask.length) == 0 ? "No hay tareas, añadir tareas" : (pendingTask.length)+"item left"}</p>
					</div>
			</div>
			
		</div>
	);
};

export default Home;

//agregar con el operador spread [...]
// eliminar con filter
import React, { useState, useEffect } from 'react';

const Buttons = () => {

	return (
		<div className="px-10 py-4 mb-4
		inline justify-center items-center rounded-lg">
			<button className="shadow-lg rounded-full py-2 px-6 bg-black text-white m-2" 
			style={{border: "solid 1px black"}}>All</button>
			<button className="shadow-lg rounded-full py-2 px-6 bg-black text-white m-2" 
			style={{border: "solid 1px black"}}>Snippets</button>
			<button className="shadow-lg rounded-full py-2 px-6 bg-black text-white m-2" 
			style={{border: "solid 1px black"}}>Articles</button>
		</div>
		)
}

export default Buttons
import React, { useState, useEffect } from 'react';

const Owner = ({ owner }) => {

	return (
		<div className="shadow-lg px-10 py-4 mb-0 bg-black z-50 w-full bg-opacity-60 
		flex flex-col justify-center items-center rounded-lg"
		style={{maxWidth: 350, border: "solid 2px black"}}>
				<div className="align-middle mx-auto text-white flex flex-col justify-center">
						<span className="
						 text-2xl tracking-widest">
							{owner.name}
						</span>	
						<img
							className="mt-4 h-48 w-48"
							style={{border: "solid 1px white", boxShadow: "10px 10px 0 white"}}
							src={owner.photo.url}
						/>
						<br/>
						<div className="m-4">	
							<p>{owner.bio}</p>
							<br/>
							<h3 className="font-semibold">Interests</h3>
							<ul className="list-disc ml-8">
							{owner.interests.map((interest, index) => (
								<li key={index}>{interest}</li>
								))}
							</ul>
						</div>
			</div>
		</div>
		)
}

export default Owner
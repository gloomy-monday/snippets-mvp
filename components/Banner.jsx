import React, { useState, useEffect } from 'react';

const Banner = ({ owner }) => {

	const bannerInlineStyle = {
		border: "solid 1px black",
		backgroundImage: `url('${owner.banner.url}')`,
		textShadow: "black 2px 2px 2px"
	}

	return (
		<div className="container xl:max-w-2xl float-right px-10 py-4 mb-4 bg-black z-50 w-full h-56 bg-opacity-60 
		rounded-lg flex flex-col justify-center items-center shadow-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
		style={bannerInlineStyle}>

				<div className="text-center text-white">
					<h1 className="text-5xl mb-4">{owner.blog.title}</h1>
					<p className="text-2xl opacity-80">{owner.blog.desc}</p>
				</div>

		</div>
		)
}

export default Banner
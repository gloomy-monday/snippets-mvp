import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';


const Header = () => {

	return (
		<div className="container px-10 py-2 mb-0 bg-black fixed z-50 w-full"
		style={{maxWidth: "none"}}>
				<div>
					<Link href="/">
						<span className="cursor-pointer font-bold
						 text-2xl text-white">
							//Snippets MVP//
						</span>
					</Link>		
			</div>
		</div>
		)
}

export default Header
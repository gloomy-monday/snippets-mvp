import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import Link from 'next/link';

const PostCard = ({ post }) => {
	moment.locale('es')
	console.log(post)
	return (
		<div className="bg-white shadow-lg rounded-lg p-0 pb-2 mb-8 xl:max-w-2xl float-right"
			style={{border: "solid 1px black"}}>
			<div className="relative overflow-hidden shadow-md pb-80 mb-6 rounded-t">
				<img
					src={post.featuredImage.url}
					alt={post.title}
					style={{borderBottom: "solid black 1px"}}
					className="object-top absolute h-full w-full object-cover shadow-lg"
				/>
				<h2 className="object-top absolute h-full w-full text-xl p-8 mt-10 whitespace-pre-line">
					<mark style={{backgroundColor: "black",
					 color: "white", padding: 4, lineHeight: 2}}>
					{post.snipped}
					</mark>
				</h2>
				<h2 className="object-bottom absolute text-right h-full w-full text-2xl p-4 opacity-70">
				<mark 
				style={{backgroundColor: "black",
					 color: "white", padding: 4, lineHeight: 2}}>
					{post.title} // {post.snippedAuth}
					</mark>
				</h2>
			</div>

      			<p className="text-right text-lg text-gray-700 font-normal px-4 lg:px-10 mb-8">
      			{post.comment}
      			</p>

      		<div className="block lg:flex text-left items-left mb-8 w-full">
      			<div className="flex items-left mb-4 ml-8 lg:mb-0 w-full 
      			lg:w-auto mr-8 items-center">
      				<p className="inline align-left text-gray-900 ml-2 text-xl font-semibold">
      				{post.author.name}
      				</p>
      				</div>
      		</div>
		</div>
		)
}

export default PostCard
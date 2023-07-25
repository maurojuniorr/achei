import postsData from '../(dashboard)/posts/posts.json';
import { Bookmark, Heart, BookMarked } from 'lucide-react';

export default function PostCard({ status }) {
	return (
		<div className='w-full m-auto p-4'>
			<div className='grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
				{postsData.map((post) =>
					post.status == status ? (
						<div
							key={post.id}
							className='border bg-white rounded-lg shadow-xl '>
							<div className='p-4  flex space-x-4  items-center'>
								<img
									src={post.avatar}
									alt={`Post ${post.avatar}`}
									className='w-14 h-14 rounded-full'
								/>
								<p>{post.postedBy}</p>
							</div>
							<div className='px-4 rounded-lg '>
								<img
									src={post.image}
									alt={`Post ${post.id}`}
									className='w-full h-auto rounded-lg'
								/>
							</div>

							<div className='  p-4  rounded-b-md h-auto   font-medium text-zinc-900'>
								<div className='flex justify-between'>
									<div className=' flex space-x-2'>
										<Heart /> <p>{post.likes}</p>
									</div>
									<div className=' flex space-x-2'>
										{post.status == 'perdido' ? <p>Achei!</p> : <p>Achado!</p>}
										{post.status == 'perdido' ? <Bookmark /> : <BookMarked />}
									</div>
								</div>

								<div className='text-lg text-left   flex space-x-2'>
									<p className='font-bold w-auto h-auto'> {post.nickname}</p>
									<p>{post.description}</p>
								</div>
							</div>
						</div>
					) : (
						''
					)
				)}
			</div>
		</div>
	);
}

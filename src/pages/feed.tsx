import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Post } from '../components/post';
import { CreatePost } from '../components/createPost';
import { Accordion } from '../components/Accordion';

const FeedPage: FunctionComponent = (): ReactElement => (
    <>
        <div className="w-full flex flex-row flex-wrap">
            <div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center ">
               

                <div className="max-w-2xl  p-5 md:px-12 lg:24 h-full ">
                    <div className="bg-white w-full shadow rounded-lg p-5">
                        <textarea
                            className="bg-gray-200 w-full rounded-lg shadow border p-2"
                            placeholder="Speak your mind"
                        ></textarea>

                        <div className="w-full flex flex-row flex-wrap mt-3">
                            <div className="w-full">
                                <button
                                    type="button"
                                    className=" bg-indigo-400 w-full hover:bg-indigo-300 text-white p-2 rounded-lg"
                                >
                                    Create Post
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" ">
                        {/* <Post /> */}
                        <Accordion title={<Post/>} content={<Comments/>} >
                        </Accordion>
                        {/* <Comments/> */}
                        {/* <Post />
                        <Post /> */}
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default FeedPage;


const Comments = () => {
    const handleSubmit =()=>{
        alert("hello world")
    }
    return (
        <>
            <div className="bg-white bg-opacity-50 p-3 max-w-lg pt-1 rounded-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ipsam ipsa veniam, ratione incidunt dolores maiores
            </div>
            <div className='w-full flex p-2 space-x-2'>
            <input type='text' 
            className="bg-gray-200 w-full rounded-lg shadow border p-2"
            placeholder="your comments on this"
            />
            <button type="submit" 
            className=" bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
            onSubmit={handleSubmit}
            >comment</button>
            </div>
        </>
    );
};


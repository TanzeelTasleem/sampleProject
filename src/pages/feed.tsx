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
                {/* <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
    <div className="w-full text-right"><button className="p-2 fa fa-bars text-4xl text-gray-600"></button></div>
  </div> */}

                {/* <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
    <div className="p-5 bg-white sticky top-0">
      <img className="border border-indigo-100 shadow-lg round" src="http://lilithaengineering.co.za/wp-content/uploads/2017/08/person-placeholder.jpg"/>
      <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
        Some Person
      </div>
    </div>
    <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer">
      <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href=""><i className="fa fa-comment text-gray-600 text-2xl pr-1 pt-1 float-right"></i>Messages</a>
      <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href=""><i className="fa fa-cog text-gray-600 text-2xl pr-1 pt-1 float-right"></i>Settings</a>
      <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href=""><i className="fa fa-arrow-left text-gray-600 text-2xl pr-1 pt-1 float-right"></i>Log out</a>
    </div>
  </div> */}

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
                        <Accordion title={<Post></Post>} content={<Comments/>} >
                        </Accordion>
                        {/* <Comments/> */}
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default FeedPage;


const Comments = () => {
    return (
        <>
            <div className="bg-white bg-opacity-50 p-3 max-w-lg pt-1 rounded-b-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ipsam ipsa veniam, ratione incidunt dolores maiores
                nobis reprehenderit voluptas, quaerat delectus reiciendis
                corporis dolorum vero itaque unde ut corrupti tenetur?
            </div>
        </>
    );
};


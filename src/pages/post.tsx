import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Post } from '../components/post';
import { CreatePost } from '../components/createPost';

const PostPage: FunctionComponent = (): ReactElement => (
    <>
        <SEO title="Home" />
        <Post/>
        <CreatePost/>
    </>
);

export default PostPage;

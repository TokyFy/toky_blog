import React, { useContext, useEffect, useState } from 'react';
import { Section } from '../../components/layouts/layout';
import Header from '../../components/header/header';
import WriteMessage from './WriteMessage';
import style from './guestbook.module.scss';
import Message from './Message';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { useQuery, useMutation } from '@apollo/client';
import { formatDate } from '../../utils/formatDate';

import { GET_ALL_COMMENTS } from '../../Graphql/query';
import { ADD_COMMENTS } from '../../Graphql/mutation';

import { posts } from '../../Graphql/type';

const PROXY_URL = String(import.meta.env.VITE_PROXY_URL);

const Guestbook = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [user, setUser] = useState('unknown');
  const {
    loading: AllCommentsLoading,
    error: AllCommentError,
    data: AllCommentData
  } = useQuery(GET_ALL_COMMENTS);
  const [
    addComment,
    { data: addCommentData, loading: addCommentLoading, error: addCommentError }
  ] = useMutation(ADD_COMMENTS);

  const [allPosts, setAllPosts] = useState<posts[]>([]);

  useEffect(() => {
    setAllPosts(AllCommentData?.comments);
  }, [AllCommentsLoading]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${PROXY_URL}/user`, {
        headers: {
          Authorization: 'token ' + token
        }
      })
      .then((res) => {
        setUser(res.data.login);
        setAuth(true);
      });
  }, [addCommentLoading]);

  async function sendComment(comments: string) {
    const post = await addComment({
      variables: { comment: comments, author: user }
    });
    const { _typename, ...newPost } = post.data.setComments;
    setAllPosts([newPost, ...allPosts]);
  }

  return (
    <Section>
      <Header
        header={'GuestBook'}
        description={[
          'Leave a message for me and other visitors.',
          "It can be anything, as long as you're nice! 🖤"
        ]}
      />
      <WriteMessage send={sendComment} />
      <div className={style.messageList}>
        {allPosts?.map((post) => (
          <Message
            key={post.id}
            message={post.comment}
            name={post.author}
            date={formatDate(post.date)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Guestbook;

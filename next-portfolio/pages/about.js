import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';

 class About extends Component {
  static async getInitialProps() {
    const res  = await fetch('http://api.github.com/users/7princekumar');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

      return {user: data, statusCode: statusCode};
  }

  render() {
    const { user, statusCode } = this.props; //des-tructure

    if(statusCode) {
      return <Error statusCode={statusCode}/>
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Prince" height="200px" />
      </Layout>
    );
  }
}

export default About;
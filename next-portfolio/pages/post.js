import Layout from '../components/Layout';
import { withRouter } from 'next/router'; 
//https://github.com/zeit/next.js/blob/master/errors/url-deprecated.md

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: '80vw' }}>Dolor dolor exercitation officia magna proident velit labore 
      proident consectetur veniam id do. Consequat exercitation minim 
      incididunt proident irure. Nostrud proident duis ipsum sint minim.</p>
  </Layout>
);

export default withRouter(Post);
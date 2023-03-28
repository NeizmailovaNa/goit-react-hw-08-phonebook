import { PhoneOutlined } from '@ant-design/icons/lib/icons';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '30px',
        width: '600px',
        margin: 'auto',
        marginTop: '50px',
      }}
    >
      <PhoneOutlined />
      <div>
      If you want to use the phone book, you need to register or log in
      </div>
    </div>
  );
};
export default Home;
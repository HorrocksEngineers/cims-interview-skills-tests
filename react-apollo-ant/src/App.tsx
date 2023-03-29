import { Layout, theme, Typography } from 'antd';
import AsphaltLots from './AsphaltLots';
const { Header, Content, Footer } = Layout;
const { Text } = Typography;

export default function App() {
  const {
    token: { colorBgBase },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ paddingInline: '2rem' }}>
        <Text style={{ color: colorBgBase }}>React + Apollo + Ant Design</Text>
      </Header>
      <Content>
        <div style={{ padding: '1rem 2rem' }}>
          <AsphaltLots />
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

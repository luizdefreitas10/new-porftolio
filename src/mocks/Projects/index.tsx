import triviaImg from '../../assets/svgs/projectsMockImgs/TriviaApp.png'
import trybewalletImg from '../../assets/svgs/projectsMockImgs/trybewallet.png'
import shoppingCartImg from '../../assets/svgs/projectsMockImgs/shoppingCart.png'
import solarSystemImg from '../../assets/svgs/projectsMockImgs/solar-system-react-app.png'
import pixelArtImg from '../../assets/svgs/projectsMockImgs/pixel-art.png'
import blogsApiImg from '../../assets/svgs/projectsMockImgs/1669930711-blogs-api.webp'
import storeManagerImg from '../../assets/svgs/projectsMockImgs/Captura de ecrã 2022-12-22, às 20.22.38.png';
import techSales from '../../../public/techSalesImg.png';

export const mockData = [{
  id: 1,
  name: 'NinthGame',
  src: triviaImg,
  resume: 'O NinthGame é um jogo de perguntas e respostas baseado no jogo Trivia, onde o usuário pode efetuar o login seguindo o padrão de validações, e em seguida será direcionado para a página do jogo. Nesta página, o jogador deve responder a opção correta em até 30 segundos. Serão feitas 5 perguntas, e durante o processo é possível visualizar a pontuação atual, quantas questões assertivas foram efetuadas, e o progresso do jogo em percentual. Ao final das perguntas é exibida uma tela com a pontuação conquistada pelo usuário, bem como a possibilidade de ir para uma tela de rankings, ou jogar novamente. Na tela inicial, é possível alterar o tema de dark mode para light mode, dando outro visual à aplicação. Também é possível acessar as configurações, escolher a quantidade de perguntas do jogo, a categoria, dificuldade  e o tipo de perguntas. Um jogo super divertido e desafiador para testar seus conhecimentos sobre diversos assuntos.',
  stacks: ["JavaScript", "Styled-Components", "React", "Redux", "RTL (react testing library)"],
  vercel: 'https://react-trivia-eta.vercel.app/'
}, 
{
  id: 2,
  name: 'TechSales E-commerce',
  src: techSales,
  resume: 'Um moderno e-commerce desenvolvido para venda de serviços de tecnologia. Utilizando as mais recentes tecnologias web, esta plataforma permite que usuários adquiram soluções como SaaS, gestão empresarial, integrações de API e muito mais!',
  stacks: ['HTML', 'CSS', 'React', 'Styled-components', 'React-Router-Dom', 'Toastify'],
  vercel: 'https://valcann-techsales.vercel.app/',
},
{
  id: 3,
  name: 'TrybeWallet',
  src: trybewalletImg,
  resume: 'TrybeWallet é um aplicativo que simula uma carteira de controle de gastos. Após o login na tela inicial, o usuário é direcionado para a página de controle de despesas, onde pode editar a despesa, o valor da despesa e escolher, entre as opções, a moeda para a qual deseja converter o valor. Uma requisição é feita a uma API de moedas, retornando o valor exato da moeda escolhida naquele momento. Após selecionar todas as opções, temos o valor convertido para BRL no cabeçalho, assim como toda a descrição da despesa nas linhas da tabela de aplicação. Um ótimo app para controlar gastos.',
  stacks: ["JavaScript", "CSS", "React", "Redux", "RTL (react testing library)"],
  vercel: 'https://trybe-wallet-lac.vercel.app/'
},
{
  id: 4,
  name: 'Blogs API',
  src: blogsApiImg,
  resume: 'Esta é uma API e um banco de dados de gerenciamento de um blog, onde é possível buscar, criar, editar e deletar postagens. Seguindo a arquitetura MSC (model, service, controller) e os princípios REST, aplicação foi desenvolvida utilizando NodeJs e o pacote Sequelize para fazer um CRUD de posts.',
  stacks: ['NodeJs', 'JavaScript', 'Express', 'Sequelize', 'Joi', 'MySQL' ],
  vercel: 'https://github.com/luizdefreitas10/blogs-api'
}, {
  id: 5,
  name: 'API Store Manager',
  src: storeManagerImg,
  resume: 'Esta é uma API RESTFULL desenvolvida através da arquitetura MSC (model, service, controller), e funciona como sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas.',
  stacks: ['NodeJs', 'JavaScript', 'Express', 'Mocha', 'Chai', 'Sinon', 'Joi'],
  vercel: 'https://github.com/luizdefreitas10/store-manager-api',
},
{
  id: 6,
  name: 'Shopping Cart',
  src: shoppingCartImg,
  resume: 'Shopping Cart é uma aplicação de carrinho de compras, onde o usuário pode efetuar compras, escolher produtos, adicionar ao carrinho, verificar o valor total das compras, e caso queira, esvaziar o carrinho. A aplicação utiliza do local storage para salvar as informações que o usuário seleciona. A exemplo disso, é possível verificar a permanencia dos itens inseridos no carrinho durante a navegação, caso o usuário feche a aplicação. Salva os dados sem data de expiração. Os dados não serão removidos quando o browser for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos. É realizada uma requisição através da api do mercado livre, sendo possível obter como resposta da requisição os dados relativos aos produtos.',
  stacks: ["HTML", "JavaScript", "CSS"],
  vercel: 'https://shopping-cart-projectjs.vercel.app/'
}, {
  id: 7,
  name: 'Pixels Art',
  src: pixelArtImg,
  resume: 'Pixels Art é um aplicativo que permite o usuário realizar arte através de pixels. A cada vez que a página é carregada, é gerada uma paleta aleatória de cores, permitindo o usuário selecionar as cores e pintar o quadro de pixels à sua maneira.',
  stacks: ["HTML", "JavaScript", "CSS"],
  vercel: 'https://pixels-art-cql3.vercel.app/'
},
];
import { useState } from 'react'
import './App.css'
import Users from './components/Users/Users'
import Content from './components/Content/Content'
import Statistics from './components/Statistics/Statistics'
import Test from './components/Test/Test'

function App() {
  const [page, setPage] = useState(0)

  const [blog, setBlog] = useState([
    {
      title: "Instagram",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat libero sit amet ante auctor tempus. Aenean urna nibh, gravida in neque id, pretium euismod dui. Phasellus sapien lectus, scelerisque lobortis ipsum eget, hendrerit ullamcorper lorem. Nam tellus diam, scelerisque pulvinar venenatis ac, dapibus quis arcu.',
    },
    {
      title: 'Facebook',
      content: 'Cras maximus vitae sem at lacinia. Fusce purus dui, ultrices ut luctus eu, accumsan sit amet lacus. Fusce ut nunc convallis, dictum ipsum in, mattis massa. In hac habitasse platea dictumst. In eu rutrum est. Maecenas tincidunt sapien non leo scelerisque molestie.',
    },
    {
      title: 'Twitter',
      content: 'Praesent lacinia enim sed diam pretium, sit amet eleifend mi egestas. Ut mollis molestie mi, vitae tempus eros vehicula euismod. Nulla vitae hendrerit sapien. Vivamus feugiat tristique tortor. Vivamus mauris turpis, vulputate et dui in, mollis lobortis quam. Sed nec suscipit justo, at ultricies nulla.'
    }
  ])

  const [statistics, setStatistics] = useState([
    {
      name: 'Tender',
      profit: '35mln$',
      loss: '10mln$'
    },
    {
      name: 'Gameloop',
      profit: '65mln$',
      loss: '32mln$'
    },
    {
      name: 'BlueStacks',
      profit: '82mln$',
      loss: '21mln$'
    }
  ])

  const userAnswers = Array.from({ length: 10 }, () => Math.random() < 0.5 ? 'A' : 'B');
  const correctAnswers = Array.from({ length: 10 }, () => 'A');

  const AlterPage = () => {
    switch (page) {
      case 'Users':
        return <Users />

      case 'Content':
        return <Content blogs={blog} />

      case 'Statistics':
        return <Statistics statistics={statistics} />

      case 'Test':
        return <Test userAnswers={userAnswers} correctAnswers={correctAnswers} />
    }
  }

  return (
    <div className='App'>
      <div className="container">
        <div className="App-header">
          <h3>useMemo</h3>
        </div>
        <div className="App-block">
          <ul>
            <li onClick={() => setPage('Users')}>Users</li>
            <li onClick={() => setPage('Content')}>Content</li>
            <li onClick={() => setPage('Statistics')}>Statistics</li>
            <li onClick={() => setPage('Test')}>Test</li>
          </ul>
        </div>
        <div className="page-content">{AlterPage()}</div>
      </div>
    </div>
  )
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundry from './ErrorBoundry';
// import PortalDemo from './components/PortalDemo';
// import PureComp from './components/PureComp';
// import Table from './components/Table';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import Binding from './components/Binding';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Hero heroName = "Super Man" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName = "BatMan" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName = "Joker" />
      </ErrorBoundry>
      {/* <PortalDemo /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <Binding /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet /> */}
      {/* <Welcome /> */}

      {/* <Hello name="Abhi"/>
      <Hello name="Nikki"/>
      <Hello name="Lavi"/> */}

    </div>
  );
}

export default App;

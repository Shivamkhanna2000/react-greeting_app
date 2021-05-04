import './App.css';
import Clock from './Clock';

function App() {

  let curTime = new Date(2021, 5, 5, 18);
  let greet="";
  const Style={};
  curTime = curTime.getHours(); 

  if(curTime>=1 && curTime<12)
  {
    greet="good morning";
    Style.color="green";
  }
  else if(curTime>=12 && curTime<17)
  {
    greet="good afternoon";
    Style.color="#FFC300";
  }
  else if(curTime>=17 && curTime<21)
  {
    greet="good evening";
    Style.color="orange";
  }
  else
  {
    greet="good night";
    Style.color="black";
  }

  return (
    <div>
    <h1>Hello sir, <span style={Style}>{greet}</span></h1>
      <Clock/>
    </div>
  );
}

export default App;

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part name={props.part[0].name} exercises={props.part[0].exercises} />
      <Part name={props.part[1].name} exercises={props.part[1].exercises} />
      <Part name={props.part[2].name} exercises={props.part[2].exercises} />
    </>
  )
};

const NumberOfExercises = (props) => {

  const numberExcercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  
  return (
    <>
      <p>Number of exercises {numberExcercises}</p>
    </>
  )};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <NumberOfExercises parts={parts} />
    </div>
  )
}

export default App

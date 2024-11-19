import MoviesList from "./MoviesList";

const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'black',
        color: 'white',
        textAlign:'center',
        fontSize:"30px",
      }}> 
      Netflix Clone App
      </h1>
      <MoviesList/>
    </div>
  );
};

export default App;

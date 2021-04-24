import propTypes from "prop-types";



const foodILike = [
  {
    id:1,
    name: "kimchi",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bgw.kr%2Fproduct%2Fpk5%2F&psig=AOvVaw2N75Ih66gFEr84UibQ_Q0g&ust=1619352023439000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC91MPqlvACFQAAAAAdAAAAABAD",
    rating: 5.0
  },
  {
    id:2,
    name: "kimchi",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.hankyung.com%2Fphoto%2F201910%2F01.20660060.1.jpg&imgrefurl=https%3A%2F%2Fwww.hankyung.com%2Feconomy%2Farticle%2F201910043712g&tbnid=ZM3wS4OZ2ZXPiM&vet=12ahUKEwjrldv25JbwAhXxxIsBHTjTCoEQMygGegUIARDpAQ..i&docid=NAq7gVi-MP3myM&w=630&h=420&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwjrldv25JbwAhXxxIsBHTjTCoEQMygGegUIARDpAQ",
    rating: 4.0
  },
  {
    id:3,
    name: "kimchi",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.kr.news.samsung.com%2Fkr%2Fwp-content%2Fuploads%2F2017%2F12%2F2-11.png&imgrefurl=https%3A%2F%2Fnews.samsung.com%2Fkr%2F%25EA%25B9%2580%25EC%25B9%2598%25EB%25A7%2588%25EB%258B%25A4-%25EC%25A0%2580%25EC%259E%25A5%25EB%25B2%2595%25EC%259D%25B4-%25EB%2594%25B0%25EB%25A1%259C-%25EC%259E%2588%25EB%258B%25A4-%25EA%25B9%2580%25EC%259E%25A5-%25EA%25B9%2580%25EC%25B9%2598-%25EB%25A7%259B%25EC%259E%2588%25EA%25B2%258C-%25EB%25B3%25B4%25EA%25B4%2580&tbnid=l13kXyMYT9oewM&vet=12ahUKEwjrldv25JbwAhXxxIsBHTjTCoEQMygaegUIARCcAg..i&docid=GkQhbclj6pEZ2M&w=849&h=566&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwjrldv25JbwAhXxxIsBHTjTCoEQMygaegUIARCcAg",
    rating: 3.8
  }
]

Potato.propTypes ={
  name: propTypes.string.isRequired,
  rating: propTypes.number,
  img: propTypes.string.isRequired
}

function Potato({name, pic, rating}){
  return (
    <div>
      <h3>I like {name}</h3> 
      <h4>{rating}/5.0</h4>
      <img src={pic} alt={name} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {foodILike.map(food => (
        <Potato name={food.name} rating={food.rating} pic={food.img} />
      ))}
    </div>
  ); 
}

export default App;

import style from './App.module.scss';

function App() {
  return (
    <>
    <div className={style.navbar} >
    <ul class="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </div>
    <div className={style.sass_check1}>
      <h1>Hello, Brother!</h1>
      <h3>SaSS Gives Love and Playful Bites!</h3>
      <p>CSS Files Playfully Accuse SaSS of This Adorable Behavior!</p>
    </div>
    <div className={style.sass_check2}>
    <p>But don't worry, it's all in good fun! SaSS and CSS make a dynamic duo, creating stylish and charming websites together.</p>
    </div>
    <div className={style.sass_check3}>
    <h2>Join the Web Adventure!</h2>
    <p>Explore the magical world of web development where SaSS and CSS join forces to make your online dreams come true. It's a journey filled with creativity and cuteness!</p>
    </div>
    <div className={style.sass_check4}>
    <p>&copy; 2023, SaSS-vs-CSS Inc. - Making the Web Adorable, One Byte at a Time!</p>
    </div>
    </>
  );
}

export default App;

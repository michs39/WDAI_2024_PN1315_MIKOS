import "./App.css";
import Koszyk from "./components/koszyk/Koszyk.tsx";
import NowyKoszyk from "./components/koszyk/NowyKoszyk.tsx";
import Licznik from "./components/liczniki/Licznik.tsx";
import NowyLicznik from "./components/liczniki/NowyLicznik.tsx";
import Formularz from "./components/formularze/Formularz.tsx";
import Haslo from "./components/formularze/Haslo.tsx";
import Logowanie from "./components/formularze/Logowanie.tsx";
import Ternary from "./components/inne/Ternary.tsx";
import Aktualizacja from "./components/inne/Aktualizacja.tsx";
import Studenci from "./components/studenci/Studenci.tsx";
import StudentManager from "./components/studenci/StudentManager.tsx";
import LicznnikIEfekt from "./components/efekty/LicznnikIEfekt.tsx";
import Tytul from "./components/efekty/Tytul.tsx";
import Odliczanie from "./components/efekty/Odliczanie.tsx";
import Komentarze from "./components/produkty/Komentarze.tsx";

function App() {
  return (
    <>
      <h1>Laboratorium 5</h1>
      <hr />
      <div id="zad1">
        <h2>Zad 1</h2>
        <h3>1.1</h3>
        <Koszyk />
        <h3>1.2</h3>
        <NowyKoszyk />
      </div>
      <hr />
      <div id="zad2">
        <h2>Zad 2</h2>
        <h3>2.1</h3>
        <Licznik />
        <h3>2.2</h3>
        <NowyLicznik />
      </div>
      <hr />
      <div id="zad3">
        <h2>Zad 3</h2>
        <h3>3.1</h3>
        <Formularz />
        <h3>3.2</h3>
        <Haslo />
        <h3>3.3</h3>
        <Logowanie />
      </div>
      <hr />
      <div id="zad4">
        <h2>Zad 4</h2>
        <h3>4.1</h3>
        <Ternary />
        <h3>4.2</h3>
        <Aktualizacja />
      </div>
      <hr />
      <div id="zad5">
        <h2>Zad 5</h2>
        <h3>5.1</h3>
        <Studenci />
        <h3>5.2</h3>
        <StudentManager />
      </div>
      <hr />
      <div id="zad6">
        <h2>Zad 6</h2>
        <h3>6.1</h3>
        <LicznnikIEfekt />
        <h3>6.2</h3>
        <Tytul />
        <h3>6.3</h3>
        <Odliczanie />
      </div>
      <hr />
      <div id="zad7">
        <h2>Zad 7</h2>
        <h3>7.1 i 7.2</h3>
        <Komentarze />
      </div>
    </>
  );
}

export default App;

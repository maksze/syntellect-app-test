import React from "react";
import { H1, H2, P, List, Li } from "components/Typo";
import { SuperControlV1 } from "components/SuperControl";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-xl m-auto">
      <main className="flex-grow">
        <H1>Тестовое задание</H1>

        <H2>Контрол с кнопками</H2>
        <P>
          Текстовый контрол, который позволяет настраивать и выводить разное
          кол-во кнопок слева и справа от самого контрола. Для кнопок должна
          быть возможность настроить `текст` и `колбек функцию`, которая
          вызывается при нажатии на кнопку.
        </P>

        <H2>Контрол с 2 кнопками справа</H2>
        <List>
          <Li>При нажатии на первую кнопку очищается содерживое в контроле;</Li>
          <Li>
            При нажатии на вторую кнопку текст в контроле меняется на 'Hello
            world!';
          </Li>
        </List>
        <SuperControlV1 />

        <H2>Контрол с 1 кнопкой справа и 1 кнопкой слева</H2>
        <List>
          <Li>
            При нажатии на кнопку справа вызывается alert с текстом в контроле
          </Li>
          <Li>
            При нажатии на кнопку слева проверяем, что в контроле введено число
            и если это так, то выводим число через alert
          </Li>
        </List>
      </main>
    </div>
  );
}

export default App;

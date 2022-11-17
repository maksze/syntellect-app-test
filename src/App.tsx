import React from "react";
import { H1, H2, H3, P, List, Li } from "components/Typo";
import { SuperControlV1, SuperControlV2 } from "components/SuperControl";
import { AutoControl } from "./components/AutoControl";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-xl m-auto">
      <main className="flex-grow">
        <H1>Тестовое задание</H1>

        <section>
          <H2>Контрол с кнопками</H2>
          <P>
            Текстовый контрол, который позволяет настраивать и выводить разное
            кол-во кнопок слева и справа от самого контрола. Для кнопок должна
            быть возможность настроить `текст` и `колбек функцию`, которая
            вызывается при нажатии на кнопку.
          </P>

          <H3>Контрол с 2 кнопками справа</H3>

          <List>
            <Li>
              При нажатии на первую кнопку очищается содерживое в контроле;
            </Li>
            <Li>
              При нажатии на вторую кнопку текст в контроле меняется на 'Hello
              world!';
            </Li>
          </List>
          <SuperControlV1 />

          <H3>Контрол с 1 кнопкой справа и 1 кнопкой слева</H3>
          <List>
            <Li>
              При нажатии на кнопку справа вызывается alert с текстом в контроле
            </Li>
            <Li>
              При нажатии на кнопку слева проверяем, что в контроле введено
              число и если это так, то выводим число через alert
            </Li>
          </List>
          <SuperControlV2 />
        </section>

        <section className="mt-12">
          <H2>Контрол-автокомплит</H2>
          <List>
            <Li>
              Текстовый контрол, который позволяет выводить подсказки при наборе
              текста. Подсказки выводятся под контролом в виде выпадающего
              списка. В подсказках должно выводиться `наименование`, `полное
              наименование` и `флаг`. При выборе подсказки, значение из неё
              проставляется в контрол.
            </Li>
            <Li>
              Контрол должен иметь настройку максимального кол-ва выводимых
              подсказок.
            </Li>
          </List>

          <div className="flex">
            <div className="p-2">
              <h3 className="mb-4 text-sm">
                Максимальное кол-во подсказок - 3
              </h3>
              <AutoControl limit={3} />
            </div>
            <div className="p-2">
              <h3 className="mb-4 text-sm">
                Максимальное кол-во подсказок - 10
              </h3>
              <AutoControl limit={10} />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12">
        17.11.2022. Made with love by
        <a href="https://t.me/maksze" target="_black" className="ml-1">
          @maksze
        </a>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o Nome do Repositorio." />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="https://www.twitch.tv/colonogamer">
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b1/b1b8036021c6a3bdc8951ca95b5112f94f133957_full.jpg"
            alt="Vitor Carlos"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy Peasy Lemon Squeazy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://www.twitch.tv/colonogamer">
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b1/b1b8036021c6a3bdc8951ca95b5112f94f133957_full.jpg"
            alt="Vitor Carlos"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy Peasy Lemon Squeazy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="https://www.twitch.tv/colonogamer">
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b1/b1b8036021c6a3bdc8951ca95b5112f94f133957_full.jpg"
            alt="Vitor Carlos"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy Peasy Lemon Squeazy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

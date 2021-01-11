import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);
    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o Nome do Repositorio."
        />
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
      </Repositories>
    </>
  );
};

export default Dashboard;

import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepoItem"

import '../styles/repositories.scss'

interface Repository {
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/pedrofrxncx/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
  }, [])
  
  return (
    <section className="repository-list">
      <h1>Repositories</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  )
}
import React from 'react'

import { Alert, FilterList, Loader, RepositoryList } from '../components'

// Utils
import { searchRepositories } from '../utils/github'

import languages from '../assets/languages.json'

export default class Popular extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeLanguage: 'All',
      error: false,
      loading: false,
      repositories: []
    }
  }

  fetchRepositories () {
    this.setState({ error: false, loading: true })

    searchRepositories(`stars:>1+language:${this.state.activeLanguage.toLowerCase()}`)
      .then((response) => {
        this.setState({ repositories: response.data.items })
      })
      .catch(() => {
        this.setState({ error: true })
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  componentDidMount() {
    this.fetchRepositories()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.state.activeLanguage !== prevState.activeLanguage) {
      this.fetchRepositories()
    } else {
      return false
    }
  }

  render () {
    const { activeLanguage, error, loading, repositories } = this.state

    return (
      <>
        <FilterList
          activeFilter={activeLanguage}
          items={languages}
          onActiveFilterChange={(language) => this.setState({ activeLanguage: language })}
        />

        {error && <Alert title="Oops!">Une erreur est survenue lors de la récupération des répertoires. Veuillez réessayer ultérieurement.</Alert>}

        {loading ? <Loader /> : <RepositoryList items={repositories} />}
      </>
    )
  }
}

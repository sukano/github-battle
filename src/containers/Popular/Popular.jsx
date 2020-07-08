import React, { useEffect } from 'react'

// Redux
import { connect } from 'react-redux'

// Actions
import { fetchRepositories } from '../../actions'

// Components
import { Alert, FilterList, Loader, RepositoryList } from '../../components'

// Data
import languages from '../../assets/languages.json'

const Popular = ({ error, fetch, loading }) => {
  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <>
      <FilterList items={languages} />

      {error && <Alert title="Oops!">Une erreur est survenue lors de la récupération des répertoires. Veuillez réessayer ultérieurement.</Alert>}

      {loading ? <Loader /> : <RepositoryList />}
    </>
  )
}

const mapStateToProps = (state, onwProps) => ({
  error: state.error,
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  fetch: () => {
    dispatch(fetchRepositories())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Popular)

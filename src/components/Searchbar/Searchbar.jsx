import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

class Searchbar extends PureComponent {
  state = {
    searchQuery: '',
  };

  handleInput = event => {
    this.setState({
      searchQuery: event.currentTarget.value.toLowerCase().trim(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    if (searchQuery.trim() === '') {
      toast.warn('Please enter search query');
      return;
    }
    onSubmit(searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { handleInput, handleSubmit } = this;
    const { searchQuery } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <SearchIcon />
            <p className="SearchForm-button-label">Search</p>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            value={searchQuery}
            onChange={handleInput}
            placeholder="Search images"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

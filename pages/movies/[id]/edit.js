import React from "react";
import { getMovieById } from "../../../actions";
// import { React } from 'react';
import MovieCreateForm from "./../../../components/movieCreateForm";

class EditMovie extends React.Component {
  // from server
  //   static getInitialProps({ query }) {
  //     return { query };
  //   }
  static async getInitialProps({
    query,
  }) {
    const movie = await getMovieById(
      query.id
    );
    return { movie };
  }

  //   state = {
  //     movie: {
  //       name: "",
  //       description: "",
  //       rating: "",
  //       cover: "",
  //       image: "",
  //       longDesc: "",
  //     },
  //   };

  //   componentDidMount() {
  //     const { id } = this.props.query;
  //     getMovieById(id).then((movie) => {
  //       this.setState({ movie });
  //     });
  //   }

  render() {
    // const { movie } = this.state;
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit Movie</h1>
        {/* {JSON.stringify(
          this.state.movie
        )} */}
        <MovieCreateForm
          initialData={movie}
        />
      </div>
    );
  }
}

export default EditMovie;

import React from "react";

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.entry)
    }
    onChange = (event) => {
        this.setState({
            entry: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <div className="border-bottom p-4">
                    <div className="container">
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-lg">
                                    <input
                                        onChange={this.onChange}
                                        type="text"
                                        name="city"
                                        id="city"
                                        className="form-control rounded-pill"
                                        placeholder="write your city and push enter" />
                                </div>
                                <div className="col-lg-auto mt-3 mt-lg-0">
                                    <input type="submit" value="Search" className="btn btn-primary rounded-pill px-5 w-100" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchInput
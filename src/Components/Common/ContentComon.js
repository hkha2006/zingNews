import { Component } from "react";
import { Link } from "react-router-dom";
export default class ContentComon extends Component {
    render() {
        return this.props.type === 1 ? (
            <div className="card">
                <div className="cardbody">
                    {this.props?.data1?.map((item, index) => (
                        <Link to={`/news/${this.props.category}/${item.id}`} key={index}>
                            <div className="card-body left" key={index}>
                                <img className="image-title" src={item.image} />
                                <p className="card-title font-weight-bold">{item.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        ) : this.props.type === 2 ? (
            <div className="card">
                {" "}
                {this.props?.data2?.map((item, index) => (
                    <Link to={`/news/${this.props.category}/${item.id}`} key={index}>
                        <img className="card-img-top"
                            src={item.image}
                            alt="Card image cap" />
                        <div className="card-body">
                            <a className="card-title font-weight-bold text-dark mid" href="#">{item.title}</a>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        ) : this.props.type === 3 ? (
            <div className="card">
                {" "}
                {this.props?.data3?.map((item, index) => (
                    <Link to={`/news/${this.props.category}/${item.id}`} key={index}>
                        <img class="card-img-top"
                            src={item.image}
                            alt="Card image cap" />
                        <div className="card-body">
                            <a className="card-title font-weight-bold text-dark left" href="#">{item.title}</a>
                        </div>
                    </Link>
                ))}
            </div>

        ) : (

            <div className="card type4">
                {" "}
                {this.props?.data4?.map((item, index) => (
                    <div className="col-md-12 col-xl-3">
                        <Link to={`/news/${item.id}`} key={index}>
                            <img class="card-img-top"
                                src={item.image}
                                alt="Card image cap" />
                            <div class="card-body" style={{}}>
                                <a className="card-title font-weight-bold text-dark type4" href="#">{item.title}</a>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        )
    }
}

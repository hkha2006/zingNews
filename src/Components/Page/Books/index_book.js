import { useEffect } from "react";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import '../Home/index_home.css'
import ContentComon from '../../Common/ContentComon'
import { selectBooks, selectLoading } from './stores/selector'
import { getAllItemsBook } from './stores/actions'
const Book = (props) => {
    const { listBooks} = props
    const { getAllItemsBook} = props
    useEffect(() => {
        getAllItemsBook();
    }, [])

    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-md-12 col-xl-8">
                        <ContentComon
                            data2={listBooks.filter((item) => item.type === 2)}
                            type={2}
                            category="books"
                        />

                    </div>
                    <div className="col-md-12 col-xl-4">
                        {" "}
                        <ContentComon
                            data3={listBooks.filter((item) => item.type === 1)}
                            type={3}
                            category="books"
                        />
                    </div>
                </div>
                <div className="row type4">
                    {" "}
                    <ContentComon
                        data4={listBooks.filter((item) => item.type === 4)}
                        type={4}
                        category="books"
                    />
                </div>
            </div>
        </div>

    );

}

const mapStatetoProps = createStructuredSelector({
    listBooks: selectBooks,
    loading: selectLoading,
})

const mapDispatchtoProp = (dispatch) => ({
    getAllItemsBook: (payload) => dispatch(getAllItemsBook(payload)),
})

const withConnect = connect(mapStatetoProps, mapDispatchtoProp)
export default compose(withConnect)(Book)
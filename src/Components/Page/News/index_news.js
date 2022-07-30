import { createStructuredSelector } from 'reselect'
import { useEffect } from "react";
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { useParams } from "react-router-dom"
import { selectDetailItem } from '../Home/stores/selector'
import { asyncDetailItem } from '../Home/stores/actions'
import { selectDetailBook } from '../Books/stores/selector'
import { asyncDetailBook } from '../Books/stores/actions'
import './index_news.css';
const News = (props) => {
  console.log(props)
  const { type } = useParams()
  const { id } = useParams()
  const { detailItem, detailbook } = props
  const { getItem, getDetail } = props
  useEffect(() => {
    async function featchData() {
     const res = type === "news" ?
        await getItem(id) :
        await getDetail(id);
      console.log(res)
    }
    featchData()
  }, [])
  const content = type === "news" ? detailItem : detailbook
  const parahraph = content.content || ""
  const arrPara = parahraph.split("//");
  return (
    <div className='content_page'>
      <h1 className='title'>{content.title}</h1>
      <p className='des'><b>{content.description}</b></p>
      <p className="content_detail">{arrPara[0]}</p>
      <div className='img'>
        <img src={content.image} />
      </div>
      <p className="content_detail">{arrPara[1]}</p>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  detailItem: selectDetailItem,
  detailbook: selectDetailBook
})

const mapDispatchtoProp = (dispatch) => ({
  getItem: (payload) => asyncDetailItem(dispatch)(payload),
  getDetail: (payload) => asyncDetailBook(dispatch)(payload)
})

const withConnect = connect(mapStatetoProps, mapDispatchtoProp)
export default compose(withConnect)(News)
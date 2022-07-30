import { useEffect, useState } from "react";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './index_home.css'
import ContentComon from '../../Common/ContentComon'
import { selectItem, selectLoading } from './stores/selector'
import { getAllItems } from './stores/actions'
const ItemZing = (props) => {
  console.log(props)
  const { listItem} = props
  const { getAllItems } = props
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  useEffect(() => {
    getAllItems();
  }, [])
  const showHide = (setShow, show) => {
    setShow( !show );
    console.log(show)
  };
  console.log(listItem)

  return (
    <div>
      <div class="container headmenu">
        <button type="button" class="btn">#Dịch sốt xuất huyết</button>
        <button type="button" class="btn">#U23 Việt Nam</button>
        <button type="button" class="btn">#Dấu ấn bản lĩnh</button>
        <button type="button" class="btn">#Johnny Depp và Amber Heard</button>
        <span class="navbar-text">
          <b>TP.Hồ Chí Minh</b> 33<sup>o</sup>C/ 25-33<sup>o</sup>C
        </span>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-md-12 col-xl-3">
            {show1 && <ContentComon
              data1={listItem.filter((item) => item.type === 1 && item.isShow === true)}
              type={1}
              category="news"
            />}
            {show1? (<EyeOutlined style={{ fontSize: '150%', color:'#69c0ff'}} onClick={() => showHide(setShow1, show1)
            } />) :
              (<EyeInvisibleOutlined style={{ fontSize: '150%', color:'#ff4d4f'}} onClick={() => showHide(setShow1, show1)} />)
            }
          </div>

          <div className="col-md-12 col-xl-6">
            {" "}
            {show2 && <ContentComon
              data2={listItem.filter((item) => item.type === 2 && item.isShow === true)}
              type={2}
              category="news"
            />}
             {show2? (<EyeOutlined style={{ fontSize: '150%', color:'#69c0ff'}} onClick={() => showHide(setShow2, show2)
            } />) :
              (<EyeInvisibleOutlined style={{ fontSize: '150%', color:'#ff4d4f'}} onClick={() => showHide(setShow2, show2)} />)
            }
          </div>
          <div className="col-md-12 col-xl-3">
            {" "}
            {show3 && <ContentComon
              data3={listItem.filter((item) => item.type === 3 && item.isShow === true)}
              type={3}
              category="news"
            />}
            {show3? (<EyeOutlined style={{ fontSize: '150%', color:'#69c0ff'}} onClick={() => showHide(setShow3, show3)
            } />) :
              (<EyeInvisibleOutlined style={{ fontSize: '150%', color:'#ff4d4f'}} onClick={() => showHide(setShow3, show3)} />)
            }
          </div>
        </div>
      </div>
    </div>
  );

}

const mapStatetoProps = createStructuredSelector({
  listItem: selectItem,
  loading: selectLoading
})

const mapDispatchtoProp = (dispatch) => ({
  getAllItems: (payload) => dispatch(getAllItems(payload))
})

const withConnect = connect(mapStatetoProps, mapDispatchtoProp)
export default compose(withConnect)(ItemZing)
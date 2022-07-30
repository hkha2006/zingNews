import { useEffect, useState } from "react";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Table, Space, notification, Button, Modal, Form, Input, Select, Radio, RadioChangeEvent } from 'antd';
import { DeleteOutlined, EditTwoTone, CheckCircleOutlined, CloseCircleOutlined, SmileOutlined, MehOutlined } from '@ant-design/icons';
import { selectItem, selectLoading } from '../Home/stores/selector'
import { asyncDeleteItem, getAllItems, asyncCreateItem, asyncUpdateItem, asyncDetailItem } from '../Home/stores/actions'
const Admin = (props) => {
  const { listItem, loading } = props
  const { getAllItems, delItem, newItem, updateItem, getItem } = props
  useEffect(() => {
    getAllItems();
  }, [])

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <img src={`${text}`} style={{ width: '100px' }} />
      )
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Show',
      dataIndex: 'isShow',
      key: 'isShow',
      render: (text, record) => (<span>{text ? <CheckCircleOutlined style={{ color: "#52c41a" }} /> : <CloseCircleOutlined style={{ color: "#f5222d" }} />}</span>),
      align: "center"

    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <EditTwoTone onClick={() => showModal(record.id)} />
          <DeleteOutlined onClick={() => showDeleteConfirm(record.id)} style={{ color: "#1890ff" }} />
        </Space>
      )
    }
  ];

  const handleDeleteItem = async (id) => {
    const respone = await delItem(id);
    if (respone === 200) {
      getAllItems();
      openNotification(
        'Thông báo nò',
        'Xóa rồi á',
        <CheckCircleOutlined style={{ color: '#52c41a', }} />)
    } else {
      openNotification(
        'Thông báo nò',
        'Khơm có xóa được á',
        <CloseCircleOutlined style={{ color: '#f5222d', }} />)
    }
  }
  const handleCreateItem = async () => {
    setIsModalVisible(true)
    formModal.resetFields()
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formModal] = Form.useForm();

  const showModal = async (id) => {
    setIsModalVisible(true);
    const respone = await getItem(id);
    if (respone) {
      formModal.setFieldsValue({
        id: respone.id,
        title: respone.title,
        image: respone.image,
        content: respone.content,
        description: respone.description,
        type: respone.type,
        iShow: respone.ishow
      })
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    if (values.id) {
      const respone = await updateItem(values);
      console.log(respone)
      if (respone.status === 200) {
        getAllItems();
        handleOk();
        openNotification(
          'Thông báo nò',
          'Update thành công rồi nhé',
          <CheckCircleOutlined style={{ color: '#52c41a', }} />)
      } else {
        openNotification(
          'Thông báo nò',
          'Update thất bại rùiii',
          <CloseCircleOutlined style={{ color: '#f5222d', }} />)
        handleOk();
      }
    }
    else {
      delete values.id
      const respone = await newItem(values)
      if (respone.status === 201) {
        getAllItems();
        handleOk()
        openNotification(
          'Thông báo nò',
          'Thêm thành công rồi nhé!!!',
          <SmileOutlined style={{ color: '#52c41a', }} />)
      } else {
        handleOk()
        openNotification(
          'Thông báo nò',
          'Thêm thất bại rùiii!!!',
          <CloseCircleOutlined style={{ color: '#f5222d', }} />)
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const openNotification = (mess, des, ic) => {
    notification.open({
      message: mess,
      description:
        des,
      icon: ic
    });
  }

  const { confirm } = Modal
  const showDeleteConfirm = (id) => {
    confirm({
      title: `Xóa bài này hử?`,
      icon: <MehOutlined style={{ color: "#d4b106" }} />,
      content: 'Chừi ưi nghĩ kỹ chưa?!?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDeleteItem(id)
      },
      onCancel() {
      },
    });
  };

  return (<div>
    <Button type="primary" onClick={handleCreateItem}>Create New Item</Button>
    <Table dataSource={listItem} columns={columns} loading={loading} rowKey='id' />
    <Modal
      title="Item"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Space>
          <Button type="primary" htmlType="submit" form="formModal">
            Submit
          </Button>
          <Button type="dashed" danger onClick={handleCancel}>Cancel</Button>
        </Space>
      ]}>
      <Form
        name="formModal"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={formModal}
      >
        <Form.Item
          label="Id"
          name="id"
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input your Title!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[
            {
              required: true,
              message: 'Please input your Image',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: true,
              message: 'Please chose type',
            },
          ]}
        >
          <Select>
            <Select.Option value={1}>1</Select.Option>
            <Select.Option value={2}>2</Select.Option>
            <Select.Option value={3}>3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Show"
          name="isShow"
          rules={[
            {
              required: true,
              message: 'Please chose show or hide',
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>Show</Radio>
            <Radio value={false}>Hide</Radio>
          </Radio.Group>
        </Form.Item>


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        </Form.Item>
      </Form>
    </Modal>
  </div>)


}

const mapStatetoProps = createStructuredSelector({
  listItem: selectItem,
  loading: selectLoading,
})

const mapDispatchtoProp = (dispatch) => ({
  getAllItems: (payload) => dispatch(getAllItems(payload)),
  delItem: (payload) => asyncDeleteItem(dispatch)(payload),
  newItem: (payload) => asyncCreateItem(dispatch)(payload),
  updateItem: (payload) => asyncUpdateItem(dispatch)(payload),
  getItem: (payload) => asyncDetailItem(dispatch)(payload)
})

const withConnect = connect(mapStatetoProps, mapDispatchtoProp)
export default compose(withConnect)(Admin)
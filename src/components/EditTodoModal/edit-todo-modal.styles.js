import styled from 'styled-components';

import { Modal as AntdModal } from 'antd';

export const Modal = styled(AntdModal)`
  .ant-form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  .ant-form-item {
    margin: 0;
  }
`;

import styled from 'styled-components';

import { List as AntdList } from 'antd';

export const List = styled(AntdList)`
  .ant-list-item-action {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }

  .ant-list-item-action > li {
    padding: 0;
  }

  .ant-list-item-action-split {
    display: none;
  }
`;

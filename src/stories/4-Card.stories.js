import React from 'react';

import { Card } from '../components';

export default {
  title: 'Card'
};

export const basic = () => (
  <Card
    style={{
      width: 300,
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    Card
  </Card>
);

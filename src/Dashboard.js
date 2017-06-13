import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default () => (
  <Card style={{ margin: '2em' }}>
    <CardHeader title="Welcome to Hellow Administration" />
    <CardText>Here you can add new/modify existing pricing and also add new sim card plan.</CardText>
  </Card>
);

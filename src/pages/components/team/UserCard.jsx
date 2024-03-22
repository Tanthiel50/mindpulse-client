import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    marginBottom: '30px',
    backgroundColor: 'transparent',
    maxWidth: '345px',
  },
  avatar: {
    width: '200px',
    height: '200px',
    position: 'absolute',
    overflow: 'hidden',
  },
  content: {
    paddingTop: '220px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
};

const UserCard = ({ title, content, imageUrl }) => {
  return (
    <Card sx={styles.card}>
      <Avatar sx={styles.avatar} src={imageUrl} />
      <CardContent sx={styles.content}>
        <Typography variant="h5" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function UserProfileCards() {
  const users = [
    { title: 'PRÉNOM', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, purus ut pulvinar ornare, nunc turpis volutpat nisi, ac tempus orci dui non nulla. Nullam malesuada justo et molestie gravida. Maecenas consectetur, urna ut elementum efficitur, risus mi hendrerit enim, a maximus quam odio et lorem. Nulla in tempus erat. Mauris eget lacus hendrerit velit viverra semper ac a erat. Vivamus eros nisl, elementum vel malesuada non, vulputate elementum risus. Sed dictum tincidunt metus, et molestie nisl congue quis. Vivamus nec odio ornare, consectetur velit at, porta ligula. Proin tortor libero, eleifend in suscipit at, sagittis vitae ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, purus ut pulvinar ornare, nunc turpis volutpat nisi, ac tempus orci dui non nulla. Nullam malesuada justo et molestie gravida. Maecenas consectetur, urna ut elementum efficitur, risus mi hendrerit enim, a maximus quam odio et lorem. Nulla in tempus erat. Mauris eget lacus hendrerit velit viverra semper ac a erat. Vivamus eros nisl, elementum vel malesuada non, vulputate elementum risus. Sed dictum tincidunt metus, et molestie nisl congue quis. Vivamus nec odio ornare, consectetur velit at, porta ligula. Proin tortor libero, eleifend in suscipit at, sagittis vitae ipsum.', imageUrl: 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'PRÉNOM', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, purus ut pulvinar ornare, nunc turpis volutpat nisi, ac tempus orci dui non nulla. Nullam malesuada justo et molestie gravida. Maecenas consectetur, urna ut elementum efficitur, risus mi hendrerit enim, a maximus quam odio et lorem. Nulla in tempus erat. Mauris eget lacus hendrerit velit viverra semper ac a erat. Vivamus eros nisl, elementum vel malesuada non, vulputate elementum risus. Sed dictum tincidunt metus, et molestie nisl congue quis. Vivamus nec odio ornare, consectetur velit at, porta ligula. Proin tortor libero, eleifend in suscipit at, sagittis vitae ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, purus ut pulvinar ornare, nunc turpis volutpat nisi, ac tempus orci dui non nulla. Nullam malesuada justo et molestie gravida. Maecenas consectetur, urna ut elementum efficitur, risus mi hendrerit enim, a maximus quam odio et lorem. Nulla in tempus erat. Mauris eget lacus hendrerit velit viverra semper ac a erat. Vivamus eros nisl, elementum vel malesuada non, vulputate elementum risus. Sed dictum tincidunt metus, et molestie nisl congue quis. Vivamus nec odio ornare, consectetur velit at, porta ligula. Proin tortor libero, eleifend in suscipit at, sagittis vitae ipsum.', imageUrl: 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'PRÉNOM', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, purus ut pulvinar ornare, nunc turpis volutpat nisi, ac tempus orci dui non nulla. Nullam malesuada justo et molestie gravida. Maecenas consectetur, urna ut elementum efficitur, risus mi hendrerit enim, a maximus quam odio et lorem. Nulla in tempus erat. Mauris eget lacus hendrerit velit viverra semper ac a erat. Vivamus eros nisl, elementum vel malesuada non, vulputate elementum risus. Sed dictum tincidunt metus, et molestie nisl congue quis. Vivamus nec odio ornare, consectetur velit at, porta ligula. Proin tortor libero, eleifend in suscipit at, sagittis vitae ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, purus ut pulvinar ornare, nunc turpis volutpat nisi, ac tempus orci dui non nulla. Nullam malesuada justo et molestie gravida. Maecenas consectetur, urna ut elementum efficitur, risus mi hendrerit enim, a maximus quam odio et lorem. Nulla in tempus erat. Mauris eget lacus hendrerit velit viverra semper ac a erat. Vivamus eros nisl, elementum vel malesuada non, vulputate elementum risus. Sed dictum tincidunt metus, et molestie nisl congue quis. Vivamus nec odio ornare, consectetur velit at, porta ligula. Proin tortor libero, eleifend in suscipit at, sagittis vitae ipsum.', imageUrl: 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj' },
  ];

  return (
    <Grid container justifyContent="center" spacing={2}>
      {users.map((user, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}> {/* Adaptation des cartes pour les breakpoints */}
          <UserCard title={user.title} content={user.content} imageUrl={user.imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
}

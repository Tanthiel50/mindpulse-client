import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const MentionsLegales = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Mentions Légales
      </Typography>
      
      <Typography variant="body1" paragraph>
        Ce site est édité par [Nom de l'entreprise], [Forme juridique] au capital de [Montant du capital] euros, dont le siège social est situé au [Adresse complète], immatriculée au Registre du Commerce et des Sociétés de [Ville d'enregistrement] sous le numéro [Numéro d'enregistrement].
      </Typography>
      
      <Typography variant="body1" paragraph>
        Directeur de la publication : [Nom du directeur de publication]
      </Typography>
      
      <Typography variant="body1" paragraph>
        Hébergeur : [Nom de l'hébergeur], [Adresse de l'hébergeur].
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Propriété intellectuelle
      </Typography>
      
      <Typography variant="body1" paragraph>
        Le contenu de ce site, incluant, de façon non limitative, les images, textes, vidéos, logos, et icônes sont la propriété exclusive de [Nom de l'entreprise] à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de [Nom de l'entreprise]. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Conditions d'utilisation
      </Typography>
      
      <Typography variant="body1" paragraph>
        L’utilisation du site [URL du site] implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-dessus. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>
      
      <Typography variant="body1" paragraph>
        Pour toute question ou demande d'information concernant le site, ou tout signalement de contenu ou d'activités illicites, l'utilisateur peut contacter l'éditeur à l'adresse suivante : [Adresse e-mail de contact] ou effectuer une demande par courrier postal adressé à [Adresse complète].
      </Typography>
      
      <Box textAlign="center" mt={4}>
        <Link href="/" variant="body2">
          Retour à l'accueil
        </Link>
      </Box>
    </Container>
  );
};

export default MentionsLegales;
